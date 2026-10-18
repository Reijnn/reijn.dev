// Renders every ```mermaid code block in content/ to an SVG with Pele, so pages ship
// the diagram as HTML instead of loading pele.js in the browser.
// Output: assets/diagrams/<sha256 of the trimmed source>.svg, which the theme's
// render-codeblock-mermaid.html looks up. A block without an SVG (e.g. one you are
// editing while `npm run dev` runs) falls back to rendering in the browser.
import { createHash } from 'node:crypto';
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { render } from 'pele';

const contentDir = 'content';
const outDir = 'assets/diagrams';
const options = {
  responsive: true,
  // Same stack as the theme's body text, so labels are sized for the font they're shown in
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif',
};

const markdownFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.name.endsWith('.md') ? [path] : [];
  });

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

let rendered = 0;
let failed = 0;
for (const file of markdownFiles(contentDir)) {
  for (const [, block] of readFileSync(file, 'utf8').matchAll(/^```mermaid[^\n]*\n([\s\S]*?)^```/gm)) {
    const source = block.trim();
    const hash = createHash('sha256').update(source).digest('hex');
    try {
      // A per-diagram id prefix keeps ids unique when a page has several diagrams
      const { svg } = render(source, { ...options, idPrefix: `d${hash.slice(0, 8)}-` });
      writeFileSync(join(outDir, `${hash}.svg`), svg);
      rendered++;
    } catch (error) {
      failed++;
      console.warn(`render-diagrams: ${file}: ${error.message.split('\n')[0]} (falls back to the browser)`);
    }
  }
}
console.log(`render-diagrams: ${rendered} diagram(s) rendered${failed ? `, ${failed} failed` : ''}`);
