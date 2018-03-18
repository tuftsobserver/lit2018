$(".flower-anim").height($(".flower").height());
$(".bird-anim").height($(".bird").height());

$( window ).resize(function() {
  $(".flower-anim").height($(".flower").height());
  $(".bird-anim").height($(".bird").height());
});
