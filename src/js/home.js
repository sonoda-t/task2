import './child_js/slider_bnr.js';
import '../sass/style.scss';

$(function() {

    $("#tab li").click(function() {
        var num = $("#tab li").index(this);
        $(".content_wrap").addClass('disnon');
        $(".content_wrap").eq(num).removeClass('disnon');
        $("#tab li").removeClass('active');
        $(this).addClass('active')
    });


    var setImg = $('#visualBg');
    var setTxt = $('.sliderMV .slick-slide');
    var viewMax = setImg.children('div').length;
    var slider2 = $('.sliderMV');
    slider2.slick({
        slidesToShow: 1,
        focusOnSelect: false,
        infinite:true,
        initialSlide:0,
        autoplay:true,
        dots:true,
        fade:true,
        draggable:false,
        autoplaySpeed:6000,
        speed:10,
        arrows:false,
        pauseOnHover:false,
        pauseOnFocus:false,
        pauseOnDotsHover:false
    })
    .on('afterChange', function() {
        var _self = $(this);
        var viewNum = _self.slick('slickCurrentSlide') + 1;
        setImg.children('div').removeClass('is-view');
        setImg.children('div:nth-child('+viewNum+')').addClass('is-view');
    });

    $(".menu__btn").on('click touchend' , function(){
        var HashOffset = $('#container').offset().top;
        $("html,body").animate({
            scrollTop: HashOffset
        }, 300);
        return false;
    });

    var megaNb;
    $(document).find('.btn_type-mega').on({
        'mouseenter' : function(){
            var megaN = $(this).data("mega");
            if(megaNb != megaN){
                $('.items:not(:animated)').slideUp(200);
                if(megaN == "megadrop-company"){
                    $('.megadrop-company:not(:animated)').slideDown(500);
                }else if(megaN == "megadrop-service"){
                    $('.megadrop-service:not(:animated)').slideDown(500);
                }else if(megaN == "megadrop-ir"){
                    $('.megadrop-ir:not(:animated)').slideDown(500);
                }else{
                    $('.megadrop-special:not(:animated)').slideDown(500);
                }
            }
            megaNb = megaN;
        }
    });
    $(document).find('#headerWrap').on({
        'mouseleave' : function(){
            $('.items:not(:animated)').slideUp(200);
            megaNb = '';
        }
    });

    $(".menu__list__block__open").on('click', function() {
        let target = $(this).closest('.menu__list__block').find('.menu__list__block__inner');
        if(!$(this).hasClass('is-open')){
            $(this).addClass('is-open');
            $(this).closest('.menu__list__block').find('.menu__list__block__inner').slideDown(200);
            return false;
        }else{
            $(this).closest('.menu__list__block').find('.menu__list__block__inner').slideUp(200);
            $(this).removeClass('is-open');
            return false;
        }
    });

    $(".categoryMenu-sp .categoryMenu_btnCloseWrap").on('click', function() {
        $(this).closest('.categoryMenu-sp').find('.categoryMenu-sp_inner').slideUp(200);
        $(this).closest('.categoryMenu-sp').find('.btnAcc').removeClass('is-open');
        $(this).closest('.categoryMenu-sp').find('.btnAcc i').removeClass().addClass('icon-open');
        return false;
    });

    $(".nav__sp__ham").on('click touchend', function() {
        if(!$(this).hasClass('is-open')){
            $(this).addClass('is-open');
            $('.nav__menus').addClass('is-open');
            $(this).find('.txt').text('CLOSE');
            if($('.nav__sp__menu').hasClass('is-open')){
                $('.nav__sp__menu').removeClass('is-open');
                $('.open-menu').removeClass('is-open');
            }
        }else{
            $(this).removeClass('is-open');
            $('.nav__menus').removeClass('is-open');
            $(this).find('.txt').text('MENU');
        }
        return false;
    });
    $(".nav__sp__menu").on('click touchend', function() {
        if(!$(this).hasClass('is-open')){
            $(this).addClass('is-open');
            $('.open-menu').addClass('is-open');
            if($('.nav__sp__ham').hasClass('is-open')){
                $('.nav__sp__ham').removeClass('is-open');
                $('.nav__menus').removeClass('is-open');
                $('.nav__sp__ham').find('.txt').text('MENU');
            }
        }else{
            $(this).removeClass('is-open');
            $('.open-menu').removeClass('is-open');
        }
        return false;
    });

    var windowWidth = window.innerWidth;
    function screenSize(){
        if ($('#container').css('min-width') == '700px' || $('#container').css('min-width') == '400px' || $('#container').css('min-width') == '320px') {
            $('.imgChange').each(function(){$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));});
        }else {
            $('.imgChange').each(function(){$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));});
        }
        windowWidth = window.innerWidth;
    }
    screenSize();

    var timer = false;
    $(window).on('resize', function(){
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            var w = window.innerWidth;
            if(w != windowWidth){
                screenSize();
            }
        }, 100);
    });
});
