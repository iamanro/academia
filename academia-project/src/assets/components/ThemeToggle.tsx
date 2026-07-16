// /src/assets/components/ThemeToggle.tsx
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import type { ThemePreference } from '../../hooks/useTheme';

interface ThemeToggleProps {
  preference: ThemePreference;
  onCycle: () => void;
}

const LABELS: Record<ThemePreference, string> = {
  light: 'Světlý režim',
  dark: 'Tmavý režim',
  system: 'Podle systému',
};

function ThemeToggle({ preference, onCycle }: ThemeToggleProps) {
  const icon =
    preference === 'light' ? <FiSun /> : preference === 'dark' ? <FiMoon /> : <FiMonitor />;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onCycle}
      title={`Motiv: ${LABELS[preference]} (klikněte pro změnu)`}
      aria-label={`Přepnout motiv, aktuálně: ${LABELS[preference]}`}
    >
      {icon}
      <span className="theme-toggle-label">{LABELS[preference]}</span>
    </button>
  );
}

export default ThemeToggle;
