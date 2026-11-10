/* ============================================================
   ELR Shooter — Interactions
   - Mobile nav toggle
   - Auto-updating copyright year
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Close on link click (mobile)
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});