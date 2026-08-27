// src/hooks/useAudio.js
// Audio Engine supporting static asset lookup, ElevenLabs dynamic fallback, and Web Audio SFX
// Strictly follows audio_generation_pipeline (5).md.

import { useRef, useCallback, useEffect } from 'react';
import { audioMap } from '../utils/audioMap.js';
import { VOICE_ID, VOICE_MODEL, VOICE_SETTINGS } from '../config/audio.config.js';

const blobCache = new Map();
let globalAudio = null;
let globalNarrateId = 0;

export function useAudio(audioEnabled = true) {
  const audioEnabledRef = useRef(audioEnabled);
  audioEnabledRef.current = audioEnabled;

  useEffect(() => {
    if (!audioEnabled) {
      stopAll();
    }
  }, [audioEnabled]);

  const stopAll = useCallback(() => {
    globalNarrateId++;
    if (globalAudio) {
      globalAudio.pause();
      globalAudio.currentTime = 0;
      globalAudio = null;
    }
  }, []);

  const getAudioUrl = useCallback(async (text, style = 'statement') => {
    // 1. Check static pre-generated audioMap first (exact text match)
    if (audioMap && audioMap[text]) {
      return audioMap[text];
    }

    // 2. Memory cache check
    const cacheKey = `${text}__${style}`;
    if (blobCache.has(cacheKey)) return blobCache.get(cacheKey);

    // 3. Dynamic generation via ElevenLabs if API key present
    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
    if (!apiKey) return null;

    try {
      const settings = VOICE_SETTINGS[style] || VOICE_SETTINGS.statement;
      const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          model_id: VOICE_MODEL,
          voice_settings: settings,
        }),
      });
      if (!res.ok) return null;
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      blobCache.set(cacheKey, url);
      return url;
    } catch {
      return null;
    }
  }, []);

  const playSegment = useCallback(async (text, style, expectedId) => {
    if (!audioEnabledRef.current || globalNarrateId !== expectedId) return;
    const url = await getAudioUrl(text, style);
    if (!url || globalNarrateId !== expectedId) return;

    return new Promise((resolve) => {
      if (globalNarrateId !== expectedId) { resolve(); return; }

      if (globalAudio) {
        globalAudio.pause();
        globalAudio = null;
      }

      const audio = new Audio(url);
      globalAudio = audio;

      audio.onended = () => {
        if (globalAudio === audio) globalAudio = null;
        resolve();
      };
      audio.onerror = (err) => {
        console.warn('[Audio Engine] Playback error on:', url, err);
        if (globalAudio === audio) globalAudio = null;
        resolve();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('[Audio Engine] Play blocked by browser policy:', err.message);
          resolve();
        });
      }
    });
  }, [getAudioUrl]);

  const narrate = useCallback(async (segments) => {
    if (!audioEnabledRef.current || !segments || !segments.length) return;
    stopAll();
    const currentId = ++globalNarrateId;

    for (let i = 0; i < segments.length; i++) {
      if (globalNarrateId !== currentId || !audioEnabledRef.current) break;
      const seg = segments[i];

      // Eagerly preload next segment
      if (i + 1 < segments.length) {
        getAudioUrl(segments[i + 1].text, segments[i + 1].style).catch(() => {});
      }

      await playSegment(seg.text, seg.style, currentId);
      if (globalNarrateId !== currentId || !audioEnabledRef.current) break;
      await new Promise((r) => setTimeout(r, 180));
    }
  }, [stopAll, playSegment, getAudioUrl]);

  // Tone-based sound synthesizer for instant zero-latency feedback
  const playTone = useCallback((frequencies, durations) => {
    if (!audioEnabledRef.current) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      let offset = 0;
      frequencies.forEach((freq, i) => {
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.22, ctx.currentTime + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + offset + (durations[i] || 150) / 1000 + 0.2);
        osc.start(ctx.currentTime + offset);
        osc.stop(ctx.currentTime + offset + (durations[i] || 150) / 1000 + 0.2);
        offset += (durations[i] || 150) / 1000;
      });
    } catch { /* ignore WebAudio errors */ }
  }, []);

  const sounds = {
    correct: () => playTone([880, 1100, 1320], [100, 100, 180]),
    wrong:   () => playTone([220, 180], [180, 200]),
    badge:   () => playTone([523, 659, 784, 1047], [90, 90, 90, 240]),
    streak:  () => playTone([440, 880, 1100], [70, 70, 180]),
    levelUp: () => playTone([523, 659, 784, 1047, 1319], [60, 60, 60, 60, 250]),
    click:   () => playTone([440], [50]),
    defeat:  () => playTone([300, 240, 180], [120, 120, 250]),
  };

  return {
    narrate,
    stopAll,
    sounds,
    say:       (text) => ({ text, style: 'statement' }),
    ask:       (text) => ({ text, style: 'question' }),
    cheer:     (text) => ({ text, style: 'celebration' }),
    emphasize: (text) => ({ text, style: 'emphasis' }),
    think:     (text) => ({ text, style: 'thinking' }),
    celebrate: (text) => ({ text, style: 'celebration' }),
    instruct:  (text) => ({ text, style: 'instruction' }),
    encourage: (text) => ({ text, style: 'encouragement' }),
  };
}

export default useAudio;
