$(document).ready(function () {

  // Navigation

  const $open = $('.nav-open');
  const $close = $('.nav-close');
  const $menu = $('.nav-list');

  $open.on('click', function () {
    $menu.addClass('nav-in');
  });

  $close.on('click', function () {
    $menu.removeClass('nav-in');
  });

  // Subscribtion months

  const $months = $('.subscribtion-month-item');

  $months.bind('click', function () {
    $months.siblings().removeClass('smi-active');
    $(this).addClass('smi-active');
  });

});
