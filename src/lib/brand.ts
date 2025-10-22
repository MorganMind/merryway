export const brand = {
  colors: {
    primary: {
      DEFAULT: '#1B2A41',
      hover: '#152235',
      pressed: '#0F1A27',
      disabled: '#8FA1B8',
      on: '#FFFFFF',
    },
    text: {
      ink: '#14181D',
      slate: '#2A3037',
      muted: '#64707D',
    },
    background: {
      canvas: '#FAF8F3',
      card: '#FFFFFF',
      divider: '#E8E6E1',
    },
    accent: {
      sparkle: '#D4AF37',
      sage: '#7BA89A',
    },
    status: {
      info: '#E8EEF5',
      success: '#E7F4EC',
      danger: '#FDECEC',
      dangerText: '#CC4B4B',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  typography: {
    fontFamily: {
      heading: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      body: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      logo: ['var(--font-eczar)', 'Eczar', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  motion: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  },
} as const;

export type Brand = typeof brand;
