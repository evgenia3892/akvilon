import * as webP from "./modules/webp.js";
import * as slick from './modules/slick.min.js';

webP.isWebP();

/*  example works slider */
$('.examples-works__slider').lightGallery({
    thumbnail: false,
    loop: true,
});
$('.examples-works__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<svg width="28" height="24" class="slick-arrows slick-next" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.80761 11.0711 0.80761 10.4853 1.3934L0.939341 10.9393ZM28 10.5L2 10.5L2 13.5L28 13.5L28 10.5Z" fill="#004AB3"/></svg>',
    nextArrow: '<svg width="28" height="24" class="slick-arrows slick-prev" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807611 15.9792 0.807611 15.3934 1.3934C14.8076 1.97919 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM0 13.5H26V10.5H0V13.5Z" fill="#004AB3"/></svg>',
    centerMode: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1010,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 741,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true
        }
    }, ],
});

/*  tabs advantages */
$('.our-advantages__tabs li:first-child').addClass('active');
$('.our-advantages__item').hide();
$('.our-advantages__item:first').show();

$('.our-advantages__tabs li').click(function() {
    $('.our-advantages__tabs li').removeClass('active');
    $(this).addClass('active');
    $('.our-advantages__item').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});

/*  tabs products */
$(function() {
    let tab = $('.products-tabs__wrapper .products-tabs__items > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('.products-tabs__wrapper .products-tabs__nav a').click(function() {
        tab.hide();
        tab.filter(this.hash).show();
        $('.products-tabs__wrapper .products-tabs__nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();


    if (window.location.hash) {
        $('.products-tabs__nav a[href=' + window.location.hash + ']').click();
        window.scrollTo(0, $("#".window.location.hash).offset().top);
    }
});


/*  fixed feedback button */
$(window).scroll(function() {
    if ($(this).scrollTop() > 110) {
        $(".header__feedback").addClass("fixed")
    } else {
        $(".header__feedback").removeClass("fixed")
    }
});
/*  mobile nav  */
$(".header__mobile-nav-btn").click(function() {
    $(".header__mobile-nav-btn").toggleClass("header__mobile-nav-btn_active");
    $(".header__mobile-nav").toggleClass("header__mobile-nav_active");
})

/*  FAQ */
$(document).on('click', 'dt', function() {
    let myDD = $(this).next('dd');
    $(".questions__item dt").removeClass("active");
    $(this).addClass("active");
    $('dd').slideUp();
    myDD.slideToggle();
});