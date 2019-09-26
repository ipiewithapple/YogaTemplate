// Navigation

const $open = $('.nav-open');
const $close = $('.nav-close');
const $menu = $('.nav-list');

$open.on('click', () => {
  $menu.addClass('nav-in');
});

$close.on('click', () => {
  $menu.removeClass('nav-in');
});


