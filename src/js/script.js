$(document).ready(function () {

  // Navigation

  const $open = $('.nav-open');
  const $close = $('.nav-close');
  const $menu = $('.nav-list');

  $open.on('click', function () {
    $menu.addClass('nav-in');
    $open.addClass('nav-out');
  });

  $close.on('click', function () {
    $menu.removeClass('nav-in');
    $open.removeClass('nav-out');
  });

  // Subscribtion months

  const $months = $('.subscribtion-month-item');

  $months.bind('click', function () {
    $months.siblings().removeClass('smi-active');
    $(this).addClass('smi-active');
  });

});
