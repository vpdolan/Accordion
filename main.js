// IIFE

 //(function ()) {
 

$( document ).ready(function() {
  $(".section").click(function() {
    $(".section").removeClass("grow"); 
    $(this).addClass("grow"); 
  });
});

