var isCollapsed = true;
$(document).ready(function () {
  //get default color of nav to collapse menu
  $('.collapse').css({"background":$('.s-row').parent().css('background')})
  $(".toggle").click(function () {
    if (isCollapsed) {
      $(".collapse").animate({ left: "0px" });
      isCollapsed = false;
      $(".toggle").text("<--");
    } else {
      $(".collapse").animate({ left: "-250px" });
      isCollapsed = true;
      $(".toggle").text("-->");
    }
  });
});
