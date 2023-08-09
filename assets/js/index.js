$(document).ready(function() {
    $(".scroll-button.left").click(function() {
      $(".content").css("transform", "translateX(-50%)");
    });
  
    $(".scroll-button.right").click(function() {
      $(".content").css("transform", "translateX(0)");
    });
  });
