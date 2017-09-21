$(document).ready(function() {

  // Cache DOM references
  var $menu = $('.jquery-menu');
  var $menuButtons = $('.jquery-menu .item .button');
  var $menuDropdowns = $('.jquery-menu .item .dropdown');

  $menuButtons.on({
    'mouseover' : function(e) {
      $(this).siblings('.dropdown').stop(true, true).slideDown(300);
      $menuButtons.not(this).siblings('.dropdown').stop(true, true).delay(100).slideUp(300);
    },
    'mouseout' : function(e) {
      $menuButtons.not(this).siblings('.dropdown').stop(true, true).delay(100).slideUp(300);
    },
    'click' : function(e) {
      e.stopPropagation();
      $(this).siblings('.dropdown').stop(true, true).slideToggle(300);
      $menuButtons.not(this).siblings('.dropdown').stop(true, true).delay(100).slideUp(300);
    }
  });

  $menu.on({
    'click' : function(e) {
      e.stopPropagation();
    }
  });

  $(window).on({
    'click' : function() {
      $menuDropdowns.slideUp(300);
    }
  });

});
