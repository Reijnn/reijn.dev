const roles = ['Software Engineer', 'Product Owner', 'Data Engineer', 'Management Consultant'];

const subtitle = document.querySelector('h1 + p');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Reduced motion: keep the static subtitle from hugo.toml.
if (subtitle && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  subtitle.setAttribute('aria-label', roles.join(', '));
  const text = document.createElement('span');
  const cursor = document.createElement('span');
  text.setAttribute('aria-hidden', 'true');
  cursor.setAttribute('aria-hidden', 'true');
  cursor.textContent = '|';
  subtitle.replaceChildren(text, cursor);
  cursor.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], { duration: 1000, iterations: Infinity });

  (async () => {
    for (;;) {
      for (const role of roles) {
        for (const char of role) {
          text.textContent += char;
          await sleep(100);
        }
        await sleep(500);
        while (text.textContent) {
          text.textContent = text.textContent.slice(0, -1);
          await sleep(60);
        }
        await sleep(300);
      }
    }
  })();
}
