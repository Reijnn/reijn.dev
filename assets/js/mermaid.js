// Initialize Mermaid with theme based on user preference
// Note: mermaid is loaded globally via npm dependency
if (typeof mermaid !== 'undefined') {
  const settings = localStorage.getItem("theme") === "dark" ?
    {
      startOnLoad: true,
      theme: "dark",
      darkMode: true,
      themeVariables: {
        tertiaryColor: "#dee3ed"
      }
    }
    :
    {
      startOnLoad: true,
      theme: "base",
      darkMode: false,
      themeVariables: {
        tertiaryColor: "#dee3ed"
      }
    };

  mermaid.initialize(settings);
}
