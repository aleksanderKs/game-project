$(document).ready(function() {

var first = "First";
var second = "Second";
var third="Third";

var buttonStart =$('#start');

var speed = Math.floor((Math.random()*4500) +1 );
var speed2 = Math.floor((Math.random()*4500) +1 );
var speed3 = Math.floor((Math.random()*4500) +1 );


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

$('.third').click(function() {
  $('p').eq(1).text(" ").append(third);
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
    $('#animal1').animate({left: w}, speed, function() {
        // animate function
    }); // end animal 1 animation
     $('#animal2').animate({left: w}, speed2, function() {
    //   // animate function
     }); // end animal 2 animation

 $('#animal3').animate({left: w}, speed3, function() {
      // animate function
    }); // end animal 3 animation


  }); // end start click
} // end enableStart function

function isBetValid() {
  // Reads the input value of the betting input box
  var bets = $('.money').val();
  // makes sure it is a number
  // makes sure the gambler has enough money for bet
  // if all of the above is true return value of true
  // else return value of false
}

function checkIfwin() {
// $('.money').keyup(function() {
//   $(".balance").text($(".money").val());
// });
};






}); // end of document ready function





