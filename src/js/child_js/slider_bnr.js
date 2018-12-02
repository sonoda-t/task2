$(function() {
    $slider1 = $('.sliderBnr .slider');
    $slider1.slick({
        prevArrow: '<div class="slider-arrow slider-prev"><img src="./img/bnr_arrow_l.svg" alt="" width="20" height="40"></div>',
        nextArrow: '<div class="slider-arrow slider-next"><img src="./img/bnr_arrow_r.svg" alt="" width="20" height="40"></div>',
        slidesToShow: 1,
        focusOnSelect: false,
        centerMode: true,
        infinite:true,
        initialSlide:0,
        autoplay:true,
        dots:true,
        draggable:false,
        centerPadding:'10%',
        autoplaySpeed:4000,
        speed:500,
        pauseOnHover:false
    });
});
