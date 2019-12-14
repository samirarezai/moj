var $header_top = $('.header-top');
var $nav = $('nav');
var isFireFox = navigator.userAgent.indexOf("Firefox");
$header_top.find('a').on('click', function () {
    $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
    sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
    sectionSelector: '.vertical-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',
    responsiveWidth: 768,
    afterLoad: function (anchorLink, index) {
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },

    onLeave: function (index, nextIndex, direction) {
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },
    afterResponsive: function (isResponsive) {
        /*       alert("Is responsive: " + isResponsive);*/
        if (isResponsive == true) {
            /*
                        var height = window.innerHeight ? window.innerHeight : $(window).height();
                        $('.head-section').css('min-height', height);
                        $('.vertical-scrolling').css('min-height', height);
                        $('.vertical-scrolling').css('height',"auto");
                        $(' .activities-app .carousel-inner').css('min-height',height);
                        var height_app= $('.activities-app .carousel-inner').height()+100;
                        $('.activities-property').css('min-height',height_app);
                        $('.activities-gallery').css('min-height', height_app);
                        $('.activities-app').css('min-height', height_app);*/
            var height = window.innerHeight ? window.innerHeight : $(window).height();
            $('.head-section').css('min-height', height + 'px');
            $('.vertical-scrolling').css('min-height', height + 'px');
            $('.vertical-scrolling').css('height', 'auto');
            /*control change height of activities*/
            $('.activities-app .carousel-inner').each(function () {
                var highestBox = 0;
                $('.carousel-item', this).each(function () {

                    if ($(this).height() > highestBox) {
                        highestBox = $(this).height();

                    }

                });

                if (isFireFox > 0) {
                    $('.carousel-item', this).height('auto');
                    $('.vertical-scrolling.changeVariable').css('min-height', highestBox + 'px');
                    $('.box-activities').css('min-height', highestBox + 'px');
                    $('.box-activities .carousel-inner').css('min-height', highestBox + 'px');
                    $('.box-systems .carousel-inner').css('min-height', highestBox + 70);
                    $('.carousel-item', this).css('min-height', highestBox);
                    $('.activities-property').height(highestBox);
                    $('.activities-gallery').height(highestBox);
                } else {
                    $('.carousel-item', this).height(highestBox);
                    $('.activities-property').height(highestBox);
                    $('.activities-gallery').height(highestBox);
                }

            });
            /*control change height of text box system*/
            var firstHeight = $('.system-first-text').height();
            $('.system-box-text').height(firstHeight + 20);
        }
    }

});
if ($(window).width() < 768) {
    var height = window.innerHeight ? window.innerHeight : $(window).height();
    $('.head-section').css('min-height', height + 'px');
    $('.vertical-scrolling').css('min-height', height + 'px');
    $('.vertical-scrolling').css('height', 'auto');
    /*control change height of activities*/
    $('.activities-app .carousel-inner').each(function () {
        var highestBox = 0;
        $('.carousel-item', this).each(function () {
            console.log($(this).height())
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }

        });

        if (isFireFox > 0) {
            $('.carousel-item', this).height('auto');
            $('.vertical-scrolling.changeVariable').css('min-height', highestBox + 'px');
            $('.box-activities').css('min-height', highestBox + 'px');
            $('.box-activities .carousel-inner').css('min-height', highestBox + 'px');
            $('.box-systems .carousel-inner').css('min-height', highestBox + 70);
            $('.carousel-item', this).css('min-height', highestBox);
            $('.activities-property').height(highestBox);
            $('.activities-gallery').height(highestBox);
        } else {
            $('.carousel-item', this).height(highestBox);
            $('.activities-property').height(highestBox);
            $('.activities-gallery').height(highestBox);
        }

    });
    /*control change height of text box system*/
    var firstHeight = $('.system-first-text').height();
    $('.system-box-text').height(firstHeight + 20);
}
$('.bars').click(function () {
    if ($(this).attr('data-open') == 'open') {
        $(this).find('.hamburger').addClass('opened');
        $(this).attr('data-open', 'close');
        $('.navigation').addClass('add-style-first');
    } else {
        $(this).find('.hamburger').removeClass('opened');
        $(this).attr('data-open', 'open');
        $('.navigation').removeClass('add-style-first');
    }
});
/*==================owlCarousel====================*/
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    nav: true,
    rtl: true,
    center: true,
    autoplay: 3000,
    slideSpeed: 200,
    autoplayHoverPause: true,
    scrollPerPage: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3
        }
    }
});
$(".owl-prev").html('<img src="assets/img/next.svg" alt="">');
$(".owl-next").html('<img src="assets/img/next.svg" alt="">');


/*==================magnific-popup====================*/
$('.owl-image').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    closeOnContentClick: true,
    tLoading: '', // remove text from preloader


});
/*==================click====================*/
$('.property_btn').click(function () {
    var name_class = '.activities-property-' + $(this).attr('data-name');
    $('.background-activities').addClass('click-item');
    $('.background-border-activities').addClass('click-item-border');
    $('.activities-app').addClass('hidden');
    $(name_class).removeClass('hidden');
});
$('.gallery_btn').click(function () {
    var name_class = '.activities-gallery-' + $(this).attr('data-name');
    $('.activities-app').addClass('hidden');
    $(name_class).removeClass('hidden');
    $('.background-activities').addClass('click-item');
    $('.background-border-activities').addClass('click-item-border');

});
$('.back-button').click(function () {
    $('.background-activities').removeClass('click-item');
    $('.background-border-activities').removeClass('click-item-border');
    $('.activities-app').removeClass('hidden');
    $(this).parent().parent().addClass('hidden');
});
