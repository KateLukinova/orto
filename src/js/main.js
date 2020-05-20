import $ from '../local_modules/jquery/dist/jquery.min'
// import '../local_modules/owl.carousel/dist/owl.carousel.min'
$(document).ready(() => {

  $('.menu-icon').click(function () {
    $(this).toggleClass('open').parent().siblings().toggleClass('open')
  });

  var isCollapseOpened = false;

  $('.collapse-menu__link').on('click', function() {
    if (isCollapseOpened) {
      $(this).removeClass('active').find('.collapse-menu__sub').slideUp()
    } else {
      $(this).addClass('active').find('.collapse-menu__sub').slideDown()
    }

    isCollapseOpened = !isCollapseOpened;

  });

  $(".tabs-wrap .tab").click(function() {
    $(".tabs-wrap .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");
})
