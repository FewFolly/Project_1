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
    // Не работающий WOW
    new WOW().init();

    // Validation Form
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // строчное правило имени
            userName: {required: true,minlength: 2},
            userPhone: "required",
            // блочное правило почты
            userEmail: {
              required: true,
              email: true
            }
          },
        // сообщения
        messages: {
            userName: {
                required: "Обязательное поле для ввода",
                minlength: "Имя должно быть не короче двух букв"
            },
            userPhone: "Обязательное поле для ввода",
            userEmail: {
              required: "Обязательное поле для ввода",
              email: "Введите свою почту в формате name@domain.com"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log('Ajax сработал.Ответ сервера - ' + response);
                    alert('Форма отправлена, мы свяжемся с вами через 10 лет');
                    $(form)[0].reset();
                    modal.removeClass('modal_visible');
                },
                error: function(response) {
                    console.error('Ошибка запроса Ajax ' + response);
                }
            });
          },
    });

    // Form Mask
    $('[type=tel]').mask('+7(000) 000-00-00',{placeholder: "+7 (___) ___-__-__"});

    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '465',
        width: '100%',
        videoId: '5HBK4S1Aomk',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    function videoPlay(event){
        event.target.playVideo();
    }
});