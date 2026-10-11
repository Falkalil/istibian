/** @type {import('tailwindcss').Config} */
const v = (n) => `rgb(var(--${n}) / <alpha-value>)`;
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Tajawal', 'Segoe UI', 'Tahoma', 'sans-serif'] },
      colors: {
        bg: v('bg'), surface: v('surface'), sunken: v('sunken'), line: v('line'),
        ink: v('ink'), muted: v('muted'), navy: v('navy'), teal: v('teal'),
        good: v('good'), warn: v('warn'), bad: v('bad'), synth: v('synth'),
      },
      borderRadius: { xl: '0.85rem' },
      opacity: { 6: '0.06', 8: '0.08', 12: '0.12', 16: '0.16', 85: '0.85' },
    },
  },
  plugins: [],
};
