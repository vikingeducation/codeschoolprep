
// Javascripts for the home page

$(function(){

  // set listeners for curriculum pieces
  week = $("#home-page #curriculum .card-wrapper");
  week.on("mouseenter",".week",function(e){
    $target = $(e.target);
    $weekBack = $target.parents(".card-wrapper").find(".card-back");
    $weekBack.animate({
      left: 0
    },200);
  });
  week.on("mouseleave",".week",function(e){
    $target = $(e.target);
    $weekBack = $target.parents(".card-wrapper").find(".card-back");
    $weekBack.clearQueue();
    $weekBack.animate({
      left: -$weekBack.outerWidth()
    },200);
  })


  // set listeners for how-it-works pieces
  card = $("#home-page #how-it-works .card-wrapper");
  card.on("mouseenter",".how-card",function(e){
    console.log("HI")
    $target = $(e.target);
    $cardBack = $target.parents(".card-wrapper").find(".card-back");
    $cardBack.animate({
      // left: 0
      top: 0
    },100);
  });
  card.on("mouseleave",".how-card",function(e){
    $target = $(e.target);
    $cardBack = $target.parents(".card-wrapper").find(".card-back");
    $cardBack.clearQueue();
    $cardBack.animate({
      // left: -$cardBack.outerWidth()
      top: -$cardBack.outerHeight()
    },100);
  })

  // set listeners for the exponential diagram pieces
  $diagram = $("#home-page #curriculum .curr-diagram");
  $diagram.on("mouseenter","img", function(e){
    $target = $(e.target);
    $imgPiece = $target.parents(".img-piece");
    console.log($imgPiece);
    $(".curr-piece").each(function(){
      console.log('piece');
      if($(this).data("curr-piece") != $imgPiece.data("curr-piece")){
        $(this).css("opacity",".15");
      }
    })
  })
  $diagram.on("mouseleave","img", function(e){
    $(".curr-piece").each(function(){
      $(this).css("opacity","");
    })
  })



})