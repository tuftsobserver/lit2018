$(".flower-anim").height($(".flower").height());
$(".bird-anim").height($(".bird").height());

$(window).resize(function() {
  $(".flower-anim").height($(".flower").height());
  $(".bird-anim").height($(".bird").height());
});

// item: jquery selector for thing you want to move
// distance: how far right it should shift over the entire scroll
function liminalShift(item, distance) {
  var itemTop = $(item).offset().top;
  var itemHeight = $(item).height();
  var scrollYpos = $(window).scrollTop();
  if (scrollYpos + $(window).height() > itemTop && scrollYpos < itemTop + itemHeight) {
    var ratio =  (scrollYpos + $(window).height() - itemTop) / ($(window).height() + itemHeight);
    $(item).animate({
      left: ratio * distance,
    }, 0);
  }
}

$(window).scroll(function() {
    liminalShift("#liminal .top",    $(window).width()*.1);
    liminalShift("#liminal .mid",    $(window).width()*.15);
    liminalShift("#liminal .bottom", $(window).width()*.3);
});
