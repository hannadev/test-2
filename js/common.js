$('.slider__slides').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.slider__btn-left',
    nextArrow: '.slider__btn-right',
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false
});
$('.js-modal').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});