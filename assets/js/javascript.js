/*============buttons=============*/

/*
var section = $('.section');
var window_height = $(window).height();
var section1_position_top = $('#section1').offset().top;
var section2_position_top = $('#section2').offset().top;
var section3_position_top = $('#section3').offset().top;
var section4_position_top = $('#section4').offset().top;
var section5_position_top = $('#section5').offset().top;
/!*var window_position_top = $(window).offset().top;
var section_count;*!/

$(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 30) {
        console.log('a')
        window.scrollTo(0, 500);
        return;

    } else if (y < 99) {

    }
});
/!*$('#section1').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 140 > 0) {
        $('html, body').animate({
            scrollTop: section1_position_top
        },600);
    } else {

        $('html, body').animate({
            scrollTop: section2_position_top
        },600);
    }
});
$('#section2').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 140 > 0) {
        $('html, body').animate({
            scrollTop: section1_position_top
        },600);
    } else if(e.originalEvent.wheelDelta / 140 < 0) {

        $('html, body').animate({
            scrollTop: section3_position_top
        },600);
    }
});
$('#section3').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 140 > 0) {
        $('html, body').animate({
            scrollTop: section2_position_top
        },600);
    } else if(e.originalEvent.wheelDelta / 140 < 0){

        $('html, body').animate({
            scrollTop: section4_position_top
        },600);
    }
});
$('#section4').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 140 > 0) {
        $('html, body').animate({
            scrollTop: section3_position_top
        },600);
    } else if(e.originalEvent.wheelDelta / 140 < 0){

        $('html, body').animate({
            scrollTop: section5_position_top
        },600);
    }
});
$('#section5').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 140 > 0) {
        $('html, body').animate({
            scrollTop: section4_position_top
        },600);
    } else if(e.originalEvent.wheelDelta / 140 < 0){

        $('html, body').animate({
            scrollTop: section5_position_top
        },600);
    }
});*!/
/!*$('#section1').bind('mousewheel', function (e) {
        console.log(e.originalEvent.wheelDelta)
console.log($('.active_position').attr('id'));
    if (e.originalEvent.wheelDelta / 140 > 0) {
        $('html, body').animate({
            scrollTop: section1_position_top
        },600);
    } else {
        $('html, body').animate({
            scrollTop: section2_position_top
        },600);
    }
});*!/
*/
/*persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
function traverse(el) {
    if (el.nodeType == 3) {
        var list = el.data.match(/[0-9]/g);
        if (list != null && list.length != 0) {
            for (var i = 0; i < list.length; i++)
                el.data = el.data.replace(list[i], persian[list[i]]);
        }
    }
    for (var i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i]);
    }
}
traverse(document.body);*/
/*$(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 99) {
        $('.navigation').addClass('style-navigation');

    } else if (y < 99) {
        $('.navigation').removeClass('style-navigation');
    }
});*/
// Code By Webdevtrick ( https://webdevtrick.com )
var $header_top = $('.header-top');
var $nav = $('nav');

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


});

/*$(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 99) {
        $('.navigation').addClass('style-navigation');

    } else if (y < 99) {
        $('.navigation').removeClass('style-navigation');
    }
});*/
/*jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ){
        if ( ns.includes("noPreventDefault") ) {
            this.addEventListener("touchstart", handle, { passive: false });
        } else {
            this.addEventListener("touchstart", handle, { passive: true });
        }
    }
};*/
/*
$('box_text_system_2').hide();
$('box_text_system_3').hide();
$('box_text_system_4').hide();
$('box_text_system_5').hide();
setInterval(function () {
    $('#system-slider :first-child').fadeOut(3000).next('div').fadeIn().end().appendTo('#system-slider')
}, 6000);
*/

/*
var count = '2';
var countNumber = 2;
$('.system-btn').click(function () {
    var countId = $(this).attr('id');
    count = countId[countId.length-1];
    countNumber = Number(count);
    var this_element = $('.system-box-text#box_text_' + countId);

    if (!this_element.hasClass('show-box')) {
        $('.show-box').slideUp('show-box');
        $('.show-box').removeClass('show-box');
        setTimeout(function () {
            this_element.slideDown('show-box');
            this_element.addClass('show-box');
        }, 300);
    } else {
        return;
    }
});

setInterval(function() {

    if (countNumber === 5) {
        countNumber = 1;
        count = countNumber.toString();
    }
    $('.system-btn#system_' + count).trigger("click");
    countNumber++;
    count = countNumber.toString();
}, 10000);
*/
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

/*==================click====================*/
$('.property_btn').click(function () {
    var name_class = '.activities-property-' + $(this).attr('data-name');
    $('.background-activities').addClass('click-item ');
    $('.background-border-activities').addClass('click-item-border ');
    $('.activities-app').addClass('hidden');
    $(name_class).removeClass('hidden');
    /*    $('.head-property').addClass('fadeInDown');
        $('.pack-property').addClass('fadeInUp');
        $('.image-body-property').addClass('fadeInRight');*/
    /*   setTimeout(function () {
           $('.head-property').removeClass('fadeInDown');
           $('.pack-property').removeClass('fadeInUp');
           $('.image-body-property').removeClass('fadeInRight');
       }, 2000);*/
});
$('.gallery_btn').click(function () {
    var name_class = '.activities-gallery-' + $(this).attr('data-name');
    $('.background-activities').addClass('click-item ');
    $('.background-border-activities').addClass('click-item-border ');
    $('.activities-app').addClass('hidden');
    $(name_class).removeClass('hidden');
    /*  $('.head-gallery').addClass('fadeIn');*/
    /* setTimeout(function () {
         $('.head-property').removeClass('fadeIn');
     }, 1000);*/
});
$('.back-button').click(function () {
    $('.background-activities').removeClass('click-item ');
    $('.background-border-activities').removeClass('click-item-border ');
    $('.activities-app').removeClass('hidden');
    $(this).parent().parent().addClass('hidden');
});
