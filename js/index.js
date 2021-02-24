$(document).mousemove(function (event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round((event.pageX / windowWidth) * 150);
  mouseYpercentage = Math.round((event.pageY / windowHeight) * 150);

  $('.mouse-animate').css(
    'background',
    'radial-gradient(at ' +
      mouseXpercentage +
      '% ' +
      mouseYpercentage +
      '%, #1646aa, #05204d)'
  );
});

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('.about');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $('.navbar-default').css('background-color', '#f0f0f0');
      } else {
        $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }
});
