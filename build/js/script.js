"use strict";

// Navigation
var $open = $('.nav-open');
var $close = $('.nav-close');
var $menu = $('.nav-list');
$open.on('click', function () {
  $menu.addClass('nav-in');
});
$close.on('click', function () {
  $menu.removeClass('nav-in');
});