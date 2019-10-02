"use strict";

$(document).ready(function () {
  // Navigation
  var $open = $('.nav-open');
  var $close = $('.nav-close');
  var $menu = $('.nav-list');
  $open.on('click', function () {
    $menu.addClass('nav-in');
    $open.addClass('nav-out');
  });
  $close.on('click', function () {
    $menu.removeClass('nav-in');
    $open.removeClass('nav-out');
  }); // Subscribtion months

  var $months = $('.subscribtion-month-item');
  $months.on('click', function () {
    $months.siblings().removeClass('smi-active');
    $(this).addClass('smi-active');
  });
});