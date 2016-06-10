$(document).ready(function() {

var first = "First";
var second = "Second";

var firstClicked = false;
var secondClicked = false;

$('.first').click(function( ) {
  $('p').eq(1).text(" ").append(first);
  firstClicked = true;
});

$('.second').click(function() {
  $('p').eq(1).text(" ").append(second);
  secondClicked = true;
  // $(this).unbind('click');  // click only once on element
});

//if (firstClicked || secondClicked){

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
    })


    });




                  // add an event listener to the start button


// if($('#id').data('clicked')) {
//     //clicked element, do-some-stuff
// } else {
//     //run function2
// }


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


