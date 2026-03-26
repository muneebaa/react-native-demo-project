module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGreen: '#21C465',
        red: '#CC3333',
        offWhite: '#F5F0E8',
        primary: '#1C3D5A',
        primaryDark: '#111f2e',
        secondary: '#E8742A',
        secondaryDim: 'rgba(232,116,42,0.1)',
        tertiary: '#2E7A8C',
        tertiaryLight: '#3a9ab0',
        muted: '#7090aa',
        background: 'rgba(255,255,255,0.04)',
        border: 'rgba(255,255,255,0.07)',
      },
      fontSize: {
        heading: '35px',
      },
    },
  },
  plugins: [],
};
