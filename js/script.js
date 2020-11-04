$(document).ready(function () {


   $(".dropitem").click(function () {

      if (!$(".dropdown").hasClass("dBlock")) {
         $(this).find(".dropdown").addClass("dBlock");
      } else {
         $(".dropdown").removeClass("dBlock");
         $(this).find(".dropdown").addClass("dBlock");
      }

   });







});
