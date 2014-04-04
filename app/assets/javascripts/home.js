
// Javascripts for the home page

$(function(){

  // set listeners for curriculum pieces
  week = $("#home-page #curriculum .week-wrapper");
  week.on("mouseenter",".week",function(e){
    $target = $(e.target);
    // console.log($target);
    // console.log("nobubble");
    $weekBack = $target.parents(".week-wrapper").find(".week-back");
    $weekBack.animate({
      left: 0
    },200);
  });
  week.on("mouseleave",".week",function(e){
    $target = $(e.target);
    // console.log($target);
    // console.log("nobubble");
    $weekBack = $target.parents(".week-wrapper").find(".week-back");
    $weekBack.clearQueue();
    $weekBack.animate({
      left: -$weekBack.outerWidth()
    },200);
  })

})