var isCollapsed = true;
$(document).ready(function () {
  //get default color of nav to collapse menu
  
  $(".toggle").click(function () {
    $('.collapsed').css({"background":$('.s-row').parent().css('background')})
    var t=$(".nav-row-2").offset().top;
    var h=$(".nav-row-2").css('height');
    h=Number(h.slice(0,h.length-2));
  
    $(".collapsed").css({"top":String(Math.floor(t+h))+"px"})
      
    if (isCollapsed) {
      $(".collapsed").animate({ left: "0px" });
      isCollapsed = false;
      $(".toggle").text("<--");
    } else {
      
      $(".collapsed").animate({ left: "-250px" });
      isCollapsed = true;
      $(".toggle").text("-->");
    }
  });
});
