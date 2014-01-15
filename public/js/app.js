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
  $("#guesses").empty();
  myArray = ['apple', 'banana', 'pear', 'orange', 'strawberry']
  hangmanWord = myArray[Math.floor(Math.random() * myArray.length)];
  letters = hangmanWord.split('');
  countdown = 8
  myRe = new RegExp("(" + hangmanWord + ")");
  i = 0;
}

var gameOver = function() {
  $(".countdown").html('<h4>OVER</h4>');
    restart();
}

var gameWon = function() {
  $(".countdown").html('<h4>WON</h4>');
  restart();
}

var checkWord = function() {
  if (myRe.test(guess)) {
    gameWon();
  }
  else {
    gameOver();
  }
}

var checkCountDown = function() {
  if (countdown === -1) {
    gameOver();
  }
}

var countDown = function() {
  $(".countdown").html('<h4>'+countdown + '</h4>');
  countdown--;
  checkCountDown();
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
  $(".countdown").html('<h4>'+(countdown+1)+ '</h4>');
  submitGuess();
});
