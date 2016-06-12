$(document).ready(function() {


$('#start').hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });






// function hey(){
//  var $a =$('.first');
// var $b =$('.second');
// var $c =$('.third');

// $($a).on('click change', function() {
//     $(this).data('clicked', true);
//    return true;
// })

// $($b).on('click change', function() {
//     $(this).data('clicked', true);
//     return true;
// })

// $($c).on('click change', function() {
//     $(this).data('clicked', true);
//     console.log('clicked c ');
//     return true;
// })


// };
// hey();





var first ="anima";
var second ="animal";
var third="animalN";
var animaPicked = "";
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







var $winner ="";


function enableStart() {
  let w = $(window).width();
  $('#start').toggleClass('disabled');

  $('#start').click(function() {


   var $ch =$('#check').html().length;
   var $b = $('#userPick').html().length;


    $('#animal1').animate({left: w}, speed, function() {
      if(speed <speed2 &&speed <speed3 ) {
     $('#check').text("animal");
     if( $('#check').html().length === $('#userPick').html().length ) {
       $('#win').append('Congratulation 1 is won');
        inputm+=5;
     }

 }




 // animate function
    }); // end animal 1 animation
     $('#animal2').animate({left: w}, speed2, function() {
    if (speed2 <speed &&speed2 <speed3 ) {
$('#check').text("animal2");
if( $('#check').html().length === $('#userPick').html().length ) {
       $('#win').append('Congratulation 2 is won');
        inputm++;
     };


    }

    //   // animate function
     }); // end animal 2 animation

 $('#animal3').animate({left: w}, speed3, function() {

if(speed3 <speed2 &&speed3 <speed   ) {
$('#check').text("animalN3");

if( $('#check').html().length === $('#userPick').html().length ) {
       $('#win').append('Congratulation 3rd won');
       inputm++;
     };



}



      // animate function
    }); // end animal 3 animation





  }); // end start click



} // end enableStart function



var inputm=0;
function Tt(){
  var $b =$('.s');
$b.click(function(){
 inputm= $('.money').val();

$(".balance").text(" ").append('<div class="item">' + inputm + '</div>');



     }





)
 };
 Tt();















// function isBetValid() {
  // Reads the input value of the betting input box
  // var bets = $('.money').val();
  // $('.money').append('bets');


// $('.money').change(function () {
//   $('.balance').val($(this).val());
// });

// // makes sure it is a number
//   // makes sure the gambler has enough money for bet
//   // if all of the above is true return value of true
//   // else return value of false
// }
// isBetValid();
function checkIfwin() {
// $('.money').keyup(function() {
//   $(".balance").text($(".money").val());
// });
};

$('#restart').click(function() {
  $('#start').toggleClass('disabled');
   $('#check').text(" ");
 $('#animal1').css('left',0);
 $('#animal2').css('left',0);
 $('#animal3').css('left',0);
});
var place1 ="First";
// var place2="";
// var place3 ="";

var raceIsfinished ="false";










}); // end of document ready function





