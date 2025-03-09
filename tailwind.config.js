/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a1a0f',
        primary: '#4ade80',
        secondary: '#1f2937',
        accent: '#86efac',
        dark: '#0f172a',
        light: '#f8fafc',
      },
      backgroundImage: {
        'eco-gradient': 'linear-gradient(to right bottom, rgba(10, 26, 15, 0.9), rgba(15, 23, 42, 0.95))',
        'nature-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544v2.83L25.456 30l-1.414 1.414L0 7.97v2.828L22.627 30l-1.414 1.414L0 13.4v2.83L19.8 30l-1.414 1.414L0 18.83v2.828L16.97 30l-1.414 1.414L0 24.258v2.83L14.142 30l-1.414 1.414L0 29.686V60h60V0H.284zM60 60L30 30l30-30v60z\' fill=\'%234ade80\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};