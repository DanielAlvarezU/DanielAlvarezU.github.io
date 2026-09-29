const dialog = document.getElementById('lightbox');
const dialogImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    dialogImage.src = button.dataset.lightbox;
    if (typeof dialog.showModal === 'function') dialog.showModal();
  });
});

closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const box = dialog.getBoundingClientRect();
  const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  if (outside) dialog.close();
});
