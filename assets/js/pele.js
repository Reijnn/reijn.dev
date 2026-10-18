import { mount } from 'pele';

for (const el of document.querySelectorAll('.diagram')) {
  mount(el, el.textContent);
}
