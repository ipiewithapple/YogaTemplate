"use strict";

$(document).ready(function () {
  // Navigation
  var $open = $('.nav-open');
  var $close = $('.nav-close');
  var $menu = $('.nav-list');
  $open.on('click', function () {
    $menu.addClass('nav-in');
  });
  $close.on('click', function () {
    $menu.removeClass('nav-in');
  }); // Subscribtion months

  var $months = $('.subscribtion-month-item');
  $months.bind('click', function () {
    $months.siblings().removeClass('smi-active');
    $(this).addClass('smi-active');
  });
});