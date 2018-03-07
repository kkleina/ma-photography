$(function() {

  var navbarPosition = $('.navbar').position().top;

  function fixedNavbar() {
    var navbarEl = $('.navbar');

    if (navbarPosition < $(window).scrollTop()) {
      navbarEl.css('position', 'fixed').css('top', 0);
    } else {
      navbarEl.css('position', 'absolute').css('top', navbarPosition);
    };
  }

  function setHeightWorksItem() {
    var windowHeight = $(window).height();
    var worksItemEl = $('.grid-item');
    var worksItemWidth = $('.people').width();

    if (windowHeight > worksItemWidth) {
      worksItemEl.css('min-height', worksItemWidth);
    } else {
      worksItemEl.css('min-height', windowHeight);
    }
  }

  function bottomMenu() {
    var menuEl = $('#menu');
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition < menuEl.height()) {
      menuEl.addClass('bottom-menu');
    } else {
      menuEl.removeClass('bottom-menu');
    }
  }

  $('.btn-menu').click(function() {
    bottomMenu();
    $('#menu').toggle('slow');
  });


  setHeightWorksItem();

  $(window).resize(function() {
    setHeightWorksItem();
  });

  $(window).scroll(function() {
    fixedNavbar();
  });


  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    dotsClass: 'indicators',
    infinite: true,
    speed: 500,
    slidesToShow: 1
  });

});
