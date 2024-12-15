(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    //додаем слухачі на кнопки вибору бургер меню
    choiceSectionMenu: document.querySelectorAll('.burger-link'),
    shopToDo: document.querySelector('.burger-btn-send'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };
  refs.choiceSectionMenu.forEach(link => {
    link.addEventListener('click', toggleModal);
  });
  refs.shopToDo.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
