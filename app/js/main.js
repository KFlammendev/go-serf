$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow__left" src="../img/arrow-left.png" alt="1"></img>',
        nextArrow: '<img class="slider-arrow slider-arrow__right" src="../img/arrow-right.png" alt="1"></img>',
        asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: 'header__slider', //связываю этот элемент с верхним, а верхний с этим
    });

  
});