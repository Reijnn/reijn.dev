import mermaid from 'mermaid';

let storedTheme;
try {
  storedTheme = localStorage.getItem('theme');
} catch (_) {}

const isDark = storedTheme === 'dark';

mermaid.initialize({
  startOnLoad: true,
  theme: isDark ? 'dark' : 'base',
  darkMode: isDark,
  themeVariables: {
    tertiaryColor: '#dee3ed',
  },
});
