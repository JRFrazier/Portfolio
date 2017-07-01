$(document).ready(function() { 

    $(".container").niceScroll();

  }

);

$(window).scroll(function(){
    $(".intro").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  /* Sticky Navbar */

  /*$(window).scroll(function () {

    if ($(window).scrollTop() > 280) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });*/