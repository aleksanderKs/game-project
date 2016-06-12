$(document).ready(function() {


$('#start').hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });


var first ="Animal one finished first!!!!";
var second ="Animal two finished first";
var third="Animal three finished first";
var animaPicked = "";
var buttonStart =$('#start');

var speed = Math.floor((Math.random()*6500) +1 );
var speed2 = Math.floor((Math.random()*6500) +1 );
var speed3 = Math.floor((Math.random()*6500) +1 );

$(".first").mouseover(function(){
        $(this).css("background-color", "#BCFAFA");
    });

$(".third").mouseover(function(){
        $(this).css("background-color", "#BCFAFA");
    });


$(".second").mouseover(function(){
        $(this).css("background-color", "#BCFAFA");
    });



$("#restart").mouseover(function(){
        $(this).css("background-color", "#BCBAFA");
    });
 $("#restart").mouseout(function(){
        $(this).css("background-color", "white");
    });



$(".first").click(function( ) {




$('p').eq(0).text(" ").append(first).hide();
  // if(betIsValid()){
   enableStart();
  // } else {
  //   // display message that bet is invalid
  // }
});

$('.second').click(function() {
  $('p').eq(0).text(" ").append(second).hide();
  // if(betIsValid()){
    enableStart();
  // } else {
  //   // display message that bet is invalid
  // }
});

$('.third').click(function() {
  $('p').eq(0).text(" ").append(third).hide() ;
  // if(betIsValid()){
    enableStart();
  // } else {
  //   // display message that bet is invalid
  // }
});


var $winnermsg =$('#win');

var currentValue = $(".balance").text();
var newValue = parseInt(parseFloat(currentValue));


function enableStart() {


let w = $(window).width();
  $('#start').toggleClass('disabled');

  $('#start').click(function() {


   // var $ch =$('#check').html().length;
   // var $b = $('#userPick').html().length;


    $('#animal1').animate({left: w}, speed, function() {
      if(speed <speed2 &&speed <speed3 ) {
     $('#check').text("Animal one finished first!!!!");

     if( $('#check').html().length +1 === $('#userPick').html().length ) {
       $winnermsg.append('Congratulation 1 is won').fadeIn(600).fadeOut(600).fadeIn(600).fadeIn(100).fadeOut(100).fadeIn(100);


       newValue +=1;
       $(".balance").text(newValue);
}

else {
       newValue -=1;
       $(".balance").text(newValue);

     };

}


function gameOver() {
if ($('.balance').text() ==0){
  alert("game over");
}
};
gameOver()






 // animate function
    }); // end animal 1 animation
     $('#animal2').animate({left: w}, speed2, function() {
    if (speed2 <speed &&speed2 <speed3 ) {
  $('#check').text("Animal two finished first");
if( $('#check').html().length +1 === $('#userPick').html().length ) {
$winnermsg.append('Congratulation you won').fadeIn(100).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
 $winnermsg2.append('Congratulation 1 is won').fadeIn(600).fadeOut(600).fadeIn(600).fadeIn(500).fadeOut(500).fadeIn(500);

       newValue +=1;
       $(".balance").text(newValue);



     }

     else {
       newValue -=1;
       $(".balance").text(newValue);

     };

    }

    //   // animate function
     }); // end animal 2 animation

 $('#animal3').animate({left: w}, speed3, function() {

if(speed3 <speed2 &&speed3 <speed   ) {
$('#check').text("Animal three finished first");

if( $('#check').html().length +1  === $('#userPick').html().length ) {
       $winnermsg.append('Congratulation you won').fadeIn(100).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
      newValue +=1;
       $(".balance").text(newValue);


     }
     else {
       newValue -=1;
       $(".balance").text(newValue);

     };



}



      // animate function
    }); // end animal 3 animation





  }); // end start click



} // end enableStart function









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

        $(".first").css("background-color", "white");


        $(".second").css("background-color", "white");


        $(".third").css("background-color", "white");
 $('#start').toggleClass('disabled');
  $winnermsg.text(" ");
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





