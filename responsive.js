/* intro fade */
$(document).ready(function() { 

    $(".container").niceScroll();

  }

);

$(window).scroll(function(){
    $(".intro").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  