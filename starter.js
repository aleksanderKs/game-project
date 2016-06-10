$(document).ready(function() {

var first = "First";
var second = "Second";

var buttonStart =$('#start');

$('.first').click(function( ) {
  $('p').eq(1).text(" ").append(first);
  // if(betIsValid()){
   enableStart();
  // } else {
  //   // display message that bet is invalid
  // }
});

$('.second').click(function() {
  $('p').eq(1).text(" ").append(second);
  // if(betIsValid()){
    enableStart();
  // } else {
  //   // display message that bet is invalid
  // }
});

function enableStart() {
  let w = $(window).width();
  $('#start').toggleClass('disabled');
  $('#start').click(function() {
    $('#animal1').animate({left: w}, 5000, function() {
        // animate function
    }); // end animal 1 animation
    $('#animal2').animate({left: w}, 4000, function() {
      // animate function
    }); // end animal 2 animation
  }); // end start click
} // end enableStart function

function isBetValid() {
  // Reads the input value of the betting input box
  // makes sure it is a number
  // makes sure the gambler has enough money for bet
  // if all of the above is true return value of true
  // else return value of false
}










}); // end of document ready function





