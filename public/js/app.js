var myArray = ['apple', 'banana', 'pear', 'orange', 'strawberry']
var hangmanWord = myArray[Math.floor(Math.random() * myArray.length)];
var letters = hangmanWord.split('');
var countdown = 8
var myRe = new RegExp("(" + hangmanWord + ")");
var i = 0;

var submitGuess = function() {
  console.log(hangmanWord);
  $("#guess").keypress(function (e) {
    if (e.keyCode == '13') {
      checkLength();
    }
  });
};

var restart = function() {
  $("#guesses").val('');
  var myArray = ['apple', 'banana', 'pear', 'orange', 'strawberry']
  var hangmanWord = myArray[Math.floor(Math.random() * myArray.length)];
  var letters = hangmanWord.split('');
  var countdown = 8
  var myRe = new RegExp("(" + hangmanWord + ")");
  var i = 0;
}

var checkWord = function() {
  if (myRe.test(guess)) {
    $(".countdown").html('<h4>WON</h4>');
    restart();
  }
  else {
    $(".countdown").html('<h4>GAME OVER</h4>');
    restart();
  }
}

var countDown = function() {
  $(".countdown").html('<h4>'+countdown + '</h4>');
  i ++;
  countdown -=i;
}

var checkLetter = function() {
  if (($.inArray(guess, letters))> -1) {
    $("#guesses").prepend('<li class="green">'+guess+" is correct" +'</li>');
    countDown();
  }
  else {
    $("#guesses").prepend('<li class="red">'+guess+" is not correct" +'</li>');
    countDown();
  };
}

var checkLength = function() {
  guess = $('#guess').val();
  $("#guess").val('');
  if (guess.length > 1) {
    checkWord();
  }
  else {
    checkLetter();
  };
}

$(document).ready(function(){
  $(".countdown").html('<h4>'+countdown + '</h4>');
  submitGuess();
});
