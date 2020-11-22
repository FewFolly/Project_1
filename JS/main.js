console.log('Всем хай,я скрипт');
// Проверка загрузки документа
document.addEventListener("DOMContentLoaded",function(event){
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal_visible');
    };
// Слушатель событий активации модального окна   
modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
});
// Слушатель событий для кнопки закрытия
closeBtn.addEventListener('click', switchModal);
});