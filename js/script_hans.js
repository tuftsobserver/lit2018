// Initialize variables
var inset1top = $('#inset-1').offset().top;
var inset2top = $('#inset-2').offset().top;
var inset3top = $('#inset-3').offset().top;
var inset4top = $('#inset-4').offset().top;
var inset1height = $('#inset-1').height();
var inset2height = $('#inset-2').height();
var inset3height = $('#inset-3').height();
var inset4height = $('#inset-4').height();
var sectionScroll = 0;
var deltaScroll = 0;

// Bind parallax to scroll
$( window ).bind('scroll',function(e){
    parallaxScroll();
});

// Reseed variables
$( window ).resize(function() {
    inset1top = $('#inset-1').offset().top;
    inset2top = $('#inset-2').offset().top;
    inset3top = $('#inset-3').offset().top;
    inset4top = $('#inset-4').offset().top;
    inset1height = $('#inset-1').height();
    inset2height = $('#inset-2').height();
    inset3height = $('#inset-3').height();
    inset4height = $('#inset-4').height();
});

// Parallax scroll
function parallaxScroll() {
    // Inset section 1 parallax
    if (($(window, 'body').scrollTop() > inset1top) && ($(window, 'body').scrollTop() < inset1top + inset1height)) {
        sectionScroll = inset1top;
        deltaScroll = $(window, 'body').scrollTop() - sectionScroll;
        $('#inset-img-1').css('top', (deltaScroll * .5) + 'px');
        $('#inset-img-2').css('top', (deltaScroll * .1) + 'px');
    }
    // Inset section 2 parallax
    if (($(window, 'body').scrollTop() > inset2top) && ($(window, 'body').scrollTop() < inset2top + inset2height)) {
        sectionScroll = inset2top;
        deltaScroll = $(window, 'body').scrollTop() - sectionScroll;
        $('#inset-img-3').css('top', (-deltaScroll * .1) + 'px');
        $('#inset-img-3').css('left', (-deltaScroll * .05) + 'px');
        $('#inset-img-4').css('top', (deltaScroll * .05) + 'px');
        $('#inset-img-4').css('left', (-deltaScroll * .1) + 'px');
        $('#inset-img-5').css('top', (-deltaScroll * .15) + 'px');
        $('#inset-img-5').css('left', (deltaScroll * .1) + 'px');
    }
    // Inset section 3 parallax
    if (($(window, 'body').scrollTop() > inset3top) && ($(window, 'body').scrollTop() < inset3top + inset3height)) {
        sectionScroll = inset3top;
        deltaScroll = $(window, 'body').scrollTop() - sectionScroll;
        $('#inset-img-6-1').css('top', (-deltaScroll * .1) + 'px');
        $('#inset-img-6-1').css('left', (-deltaScroll * .05) + 'px');
        $('#inset-img-6-2').css('top', (deltaScroll * .05) + 'px');
        $('#inset-img-6-2').css('left', (-deltaScroll * .1) + 'px');
        $('#inset-img-6-3').css('top', (-deltaScroll * .15) + 'px');
        $('#inset-img-6-3').css('left', (deltaScroll * .1) + 'px');
    }
    // Inset section 4 parallax
    if (($(window, 'body').scrollTop() > inset4top) && ($(window, 'body').scrollTop() < inset4top + inset4height)) {
        sectionScroll = inset4top;
        deltaScroll = $(window, 'body').scrollTop() - sectionScroll;
        $('#inset-img-7').css('top', (deltaScroll * .2) + 'px');
        $('#inset-img-7').css('left', (deltaScroll * .1) + 'px');
    }

}