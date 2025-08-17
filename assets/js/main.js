// Mobilmeny (hamburger)
(function () {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open); // åpne/lukk meny
  });

  // lukk meny etter klikk på lenke (mobil)
  nav.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }
  });
})();
