import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Custom color system
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        code: 'var(--color-code)',
        link: {
          DEFAULT: 'var(--color-link)',
          hover: 'var(--color-link-hover)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',

        // Keep shadcn/ui compatibility for UI components
        background: 'var(--color-bg)',
        foreground: 'var(--color-text-primary)',
        card: 'var(--color-surface)',
        'card-foreground': 'var(--color-text-primary)',
        popover: 'var(--color-surface)',
        'popover-foreground': 'var(--color-text-primary)',
        primary: 'var(--color-accent)',
        'primary-foreground': 'var(--color-text-primary)',
        secondary: 'var(--color-surface)',
        'secondary-foreground': 'var(--color-text-secondary)',
        muted: 'var(--color-surface)',
        'muted-foreground': 'var(--color-text-muted)',
        'accent-foreground': 'var(--color-text-primary)',
        destructive: 'var(--color-error)',
        'destructive-foreground': 'var(--color-text-primary)',
        input: 'var(--color-border)',
        ring: 'var(--color-accent)',
      },
      boxShadow: {
        low: 'var(--shadow-elevation-low)',
        high: 'var(--shadow-elevation-high)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        button: 'var(--radius-button)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
