$(function() {
    $(document).ready(function() {
        $('.faq__box-ask').on('click', accordeon);
    });

    function accordeon() {        
        $('.faq__box-answer').not($(this).next()).slideUp(300);
        $(this).toggleClass("active");
        $(".faq__box-ask").not(this).removeClass("active");
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

    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header__top-inner")
        header.classList.toggle("scroll-active", window.scrollY > 0);
    })

});
