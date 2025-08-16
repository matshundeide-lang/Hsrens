// Hamburger-meny for mobil
(function () {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);   // Viktig! Legg til/fjern .open på nav
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });
})();
