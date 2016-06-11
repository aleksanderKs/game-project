$(document).ready(function() {


$('#start').hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });



var first = "Your aminal N1";
var second = "Your animal N2";
var third="Your animal N3 ";

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
      if(speed <speed2 &&speed <speed3) {
      console.log("Animal one won " + speed) }



        // animate function
    }); // end animal 1 animation
     $('#animal2').animate({left: w}, speed2, function() {
    if(speed2 <speed &&speed2 <speed3) {
      console.log("Animal 2 is won " + speed2) }

    //   // animate function
     }); // end animal 2 animation

 $('#animal3').animate({left: w}, speed3, function() {
if(speed3 <speed2 &&speed3 <speed) {
      console.log("Animal 3 is won" + speed3) }
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

$('#restart').click(function() {
 $('#animal1').css('left',0);
 $('#animal2').css('left',0);
 $('#animal3').css('left',0);
});
var place1 ="First";
// var place2="";
// var place3 ="";

var raceIsfinished ="false";












}); // end of document ready function





