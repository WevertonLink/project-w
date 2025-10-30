export const BrainIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 1.74.63 3.34 1.67 4.58C5.03 14.37 4 16.08 4 18c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4 0-1.92-1.03-3.63-2.67-4.42C18.37 12.34 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 1.64-.8 3.09-2.03 4H9.03C7.8 12.09 7 10.64 7 9c0-2.76 2.24-5 5-5z"
      fill="url(#brainGrad)"
      strokeWidth="0.5"
    />
  </svg>
);

export const CoffeeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#12c2e9', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#c471ed', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M2 21h18v-2H2v2zM20 8h-2V5h2c1.1 0 2 .9 2 2v1h-2zm-2 2v2c0 2.21-1.79 4-4 4h-4c-2.21 0-4-1.79-4-4V5h12v5h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2z"
      fill="url(#coffeeGrad)"
      strokeWidth="0.5"
    />
  </svg>
);

export const TrophyIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="trophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"
      fill="url(#trophyGrad)"
      strokeWidth="0.5"
    />
  </svg>
);

export const FlameIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M13.5 0.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
      fill="url(#flameGrad)"
      strokeWidth="0.5"
    />
  </svg>
);

export const SparklesIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="sparklesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z"
      fill="url(#sparklesGrad)"
      strokeWidth="0.8"
    />
    <circle cx="19" cy="6" r="1.5" fill="url(#sparklesGrad)" />
    <circle cx="5" cy="19" r="1.5" fill="url(#sparklesGrad)" />
  </svg>
);

export const ClockIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="clockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#5eead4', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#clockGrad)" strokeWidth="2" fill="none" />
    <path d="M12 6v6l4 2" stroke="url(#clockGrad)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const SettingsIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="settingsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#6b7280', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
      fill="url(#settingsGrad)"
    />
  </svg>
);

export const ChartIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M3 13h4v8H3v-8zm6-10h4v18h-4V3zm6 6h4v12h-4V9z" fill="url(#chartGrad)" />
  </svg>
);

export const TargetIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="targetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#targetGrad)" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" stroke="url(#targetGrad)" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="2" fill="url(#targetGrad)" />
  </svg>
);

export const ZenIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="zenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#c084fc', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="3" fill="url(#zenGrad)" />
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      stroke="url(#zenGrad)"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);