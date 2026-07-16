// /src/hooks/useTheme.ts
import { useCallback, useEffect, useState } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'academia-theme';

function getStoredPreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

function systemPrefersDark(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

function applyTheme(preference: ThemePreference) {
  const effective =
    preference === 'system' ? (systemPrefersDark() ? 'dark' : 'light') : preference;
  document.documentElement.dataset.theme = effective;
}

/**
 * Spravuje světlý/tmavý režim. Ukládá volbu do localStorage a reaguje na
 * změnu systémového nastavení, pokud je zvolen režim „system".
 */
export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(getStoredPreference);

  useEffect(() => {
    applyTheme(preference);
    window.localStorage.setItem(STORAGE_KEY, preference);
  }, [preference]);

  useEffect(() => {
    if (preference !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme('system');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [preference]);

  const cycleTheme = useCallback(() => {
    setPreference((prev) =>
      prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'
    );
  }, []);

  return { preference, setPreference, cycleTheme };
}
