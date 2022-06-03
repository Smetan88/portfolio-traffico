$(function() {
    $(document).ready(function() {
        //прикрепляем клик по заголовкам acc-head
        $('.faq__box-ask').on('click', accordeon);
    });

    function accordeon() {
        //скрываем все кроме того, что должны открыть
        $('.faq__box-answer').not($(this).next()).slideUp(300);
        $(this).toggleClass("active");
        $(".faq__box-ask").not(this).removeClass("active");
        // открываем или скрываем блок под заголовоком, по которому кликнули
        $(this).next().slideToggle(300);
    }

    $('.feedback__slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>',
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 861,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                arrows: false,
                centerMode: true,
                variableWidth: true
            }
        }, ]
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });

});