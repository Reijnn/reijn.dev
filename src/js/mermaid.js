import mermaid from 'mermaid';

// Initialize Mermaid with theme based on user preference
const settings = localStorage.getItem('theme') === 'dark'
  ? {
      startOnLoad: true,
      theme: 'dark',
      darkMode: true,
      themeVariables: {
        tertiaryColor: '#dee3ed',
      },
    }
  : {
      startOnLoad: true,
      theme: 'base',
      darkMode: false,
      themeVariables: {
        tertiaryColor: '#dee3ed',
      },
    };

mermaid.initialize(settings);
