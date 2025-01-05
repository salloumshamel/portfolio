const themes = {
  'default': {
    bg: '#1F2A34',  // Primary background color for dark theme
    text: '#B8D5D9', // Primary text color, light for readability
    accent: '#4FBDB0', // Accent color for buttons, links, etc.
    highLight: '#67D9A3', // Color for highlights, hover effects
    warn: '#F9C74F'  // Color for warning or alert messages
  }
};



module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
