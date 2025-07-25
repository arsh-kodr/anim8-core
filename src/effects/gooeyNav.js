export function gooeyNav(navSelector) {
  const nav = document.querySelector(navSelector);
  if (!nav) return; // ✅ Important null check

  const items = nav.querySelectorAll('.nav-item');
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('active-gooey');
    });
    item.addEventListener('mouseleave', () => {
      item.classList.remove('active-gooey');
    });
  });
}
