$(document).ready(function () {


   $(".dropitem").click(function () {

      // salvo indice del dropdown cliccato
      var clicked = $(this).index();
      //rimuovi dBlock a chi ha l'indice diverso da quello cliccato
      $(".dropitem").each(function () {
         if ($(this).index() !== clicked) {
            $(this).find(".dropdown").removeClass("dBlock");
         }
      })

      // on off sullo stesso dropdown
      $(this).find(".dropdown").toggleClass("dBlock");
   });







});
