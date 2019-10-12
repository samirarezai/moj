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
// Code By Webdevtrick ( https://webdevtrick.com )
var $header_top = $('.header-top');
var $nav = $('nav');

$header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
    sectionsColor: ['#3dcfa1', '#348899', '#ff8b20', '#ff5757', '#ffd03c'],
    sectionSelector: '.vertical-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },

    onLeave: function(index, nextIndex, direction) {
        if(index == 5) {
            $('#fp-nav').show();
        }
    },


});
