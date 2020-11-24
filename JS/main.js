console.log('Всем хай,я скрипт');
/*
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
*/
document.addEventListener("DOMContentLoaded",function(event){
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });

    var prev = $('.swiper-button-prev');
    var next = $('.swiper-button-next');
    var bullets = $('.swiper-pagination');

    next.css('left',prev.width() + 10 + bullets.width() + 10);
    bullets.css('left',prev.width() + 10);

});



// БОЖЕСКИЙ JQUERY
$(document).ready(function () {
    var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
// Слушатель событий активации модального окна  
    modalBtn.on('click',function(){
        modal.toggleClass('modal_visible');
    });
// Слушатель событий для кнопки закрытия
    closeBtn.on('click',function(){
        modal.toggleClass('modal_visible');
    });
    new WOW().init();
});