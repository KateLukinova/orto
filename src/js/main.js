import $ from '../local_modules/jquery/dist/jquery.min'
console.log('asdfsadfasd')
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

})
