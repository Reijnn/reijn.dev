// Mobile menu: the CSS hides it on phones unless it has .open
const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");

menuTrigger?.addEventListener("click", () => {
  menuTrigger.setAttribute("aria-expanded", menu.classList.toggle("open"));
});
