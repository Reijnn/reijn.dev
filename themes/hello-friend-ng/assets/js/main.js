// Theme toggle. head.html applies a saved choice before the first paint; without one the CSS follows the OS.
document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (_) {} // Site data blocked: the choice lasts until the next page
  // The comments widget is an iframe with its own theme
  document
    .querySelector(".utterances-frame")
    ?.contentWindow.postMessage({ type: "set-theme", theme: `github-${next}` }, "https://utteranc.es");
});
