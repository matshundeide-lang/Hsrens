document.addEventListener('click', (e) => {
  const btn = e.target.closest('.burger');
  if (!btn) return;
  const menu = document.querySelector('#mainmenu');
  if (menu) menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
});

// Netlify honeypot support (optional; form has data-netlify-honeypot)
