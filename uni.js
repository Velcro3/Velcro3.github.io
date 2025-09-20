// Universal Script
// Colorize
tabtheme = document.getElementById("tabcolor")
const lightColor = '#005ea2';
  const darkColor  = '#004470';

  // Function to update theme-color
  function updateThemeColor() {
    try {
      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      tabtheme.setAttribute('content', darkMode ? darkColor : lightColor);
    } catch (e) {
      // If anything goes wrong, fallback to magenta
      tabtheme.setAttribute('content', '#FF00FF');
    }
  }

  // Initialize on page load
  updateThemeColor();

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeColor);
