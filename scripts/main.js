$(document).ready(function() {

  function StickyNav(initialNavHeight) {
    if ($(window).scrollTop() > initialNavHeight) {
      $('.logo').addClass('hidden');
      $('.site-nav').addClass('sticky');
      $('.site-header').addClass('sticky');
    } else if ($(window).scrollTop() < initialNavHeight) {
      $('.site-header').removeClass('sticky');
      $('.site-nav').removeClass('sticky');
      $('.logo').removeClass('hidden');
    }
  }

  $(window).scroll(function() {
    var nav = $('#site-header');
    StickyNav(87);
  });

  StickyNav(87);

});
