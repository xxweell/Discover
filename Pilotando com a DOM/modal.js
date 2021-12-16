const buttonOpenModal = document.getElementById('openModal') // pega o buttonOpenModal
const modalWrapper = document.querySelector('modal-wrapper') // pega a div que tem a class modal-wrapper

//Remover a class invisible utilizando o evento de ckick no buttonOpenModal
buttonOpenModal.onclick = function () {
  modalWrapper.classList.remove('invisible')
}

//Adicionar a class invisible utilizando a tecla ESC do teclado
document.addEventListener('keydown', function (event) {
  const isEscKey = (event.key = 'Escape')

  if (isEscKey) {
    modalWrapper.classList.add('invisible')
  }
})
