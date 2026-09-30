const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const dialog = document.getElementById('lightbox');
const dialogImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.lightbox-close');
if (dialog && dialogImage && closeButton) {
  document.querySelectorAll('.zoomable').forEach((img) => {
    img.addEventListener('click', () => {
      dialogImage.src = img.currentSrc || img.src;
      dialogImage.alt = img.alt || 'Expanded project image';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && dialog.open) dialog.close(); });
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
