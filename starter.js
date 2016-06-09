$(document).ready(function() {

var first = "First";
var second = "Second";

$('.first').click(function( ) {
  $('p').eq(1).text(" ").append(first);

});

$('.second').click(function() {
  $('p').eq(1).text(" ").append(second);
  // $(this).unbind('click');  // click only once on element
});




 var w = $(window).width();
  $('#start').click(function() {
     $('#animal1').animate({
      left: w
      },
      5000, function() {

     });

   $('#animal2').animate({
       left: w
       },
        4000, function() {

     });

    });
 });

