// Mobile menu

const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");
const mobileQuery = getComputedStyle(document.body).getPropertyValue(
  "--phoneWidth"
);
const isMobile = () => window.matchMedia(mobileQuery).matches;
// Phones fire "resize" when the address bar slides away while scrolling, so
// only reset the menu when the layout actually crosses the phone breakpoint.
let wasMobile;
const isMobileMenu = () => {
  if (isMobile() === wasMobile) return;
  wasMobile = isMobile();
  menuTrigger && menuTrigger.classList.toggle("hidden", !wasMobile);
  menu && menu.classList.toggle("hidden", wasMobile);
};

isMobileMenu();

menuTrigger &&
  menuTrigger.addEventListener(
    "click",
    () => menu && menu.classList.toggle("hidden")
  );

window.addEventListener("resize", isMobileMenu);
