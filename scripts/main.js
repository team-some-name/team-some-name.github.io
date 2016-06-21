$(document).ready(function() {

  function StickyNav(initialNavHeight) {
    if ($(window).scrollTop() > initialNavHeight) {
      $('.site-nav').addClass('sticky');
      $('.logo').addClass('hidden');
    } else if ($(window).scrollTop() < initialNavHeight) {
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
