var tl = new TimelineMax({repeat:0, repeatDelay:5});

$(document).ready(function(){
  $("#exit").click(function(){
      window.open(window.clickTag, "_blank");
  });
  $("#exit").on('mouseover',function(){rollOverCTA();})
  $("#exit").on('mouseout',function(){rollOutCTA();})

  runAd();
});

// ---------------------------------------------------------------------------------
// Ad animation!
// ---------------------------------------------------------------------------------
function runAd() {
    $("#ad").css("display", "block");

     //- SCENE 1
    tl.from('#body', 0.75, {autoAlpha:0}, "+=0.5");
    tl.from('#learnmore', 0.75, {autoAlpha:0});
    tl.from('#learnmore', 0.75, {autoAlpha:1});
    tl.from('#learnmore', 0.75, {autoAlpha:0});
    tl.from('#learnmore', 0.75, {autoAlpha:1});
    tl.from('#learnmore', 0.75, {autoAlpha:0});
}
