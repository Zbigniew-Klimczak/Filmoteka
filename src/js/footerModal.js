(() => {
  const refs = {
    openModalBtn: document.querySelector('.copyright__span'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal__hidden');
    refs.body.classList.toggle('noScroll');
  }
})();
