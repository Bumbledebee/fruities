var myArray = ['apple', 'banana', 'pear', 'orange', 'strawberry']
var hangmanWord = myArray[Math.floor(Math.random() * myArray.length)];
var letters = hangmanWord.split('');
var countdown = 8
var myRe = new RegExp("(" + hangmanWord + ")");

var submitGuess = function() {
  console.log(hangmanWord);
  $("#guess").keypress(function (e) {
    if (e.keyCode == '13') {
      checkLength();
    }
  });
};

var checkWord = function() {
  if (myRe.test(guess)) {
    alert("You won!");
  }
  else {
    alert("Game over");
  }
}

var checkLetter = function() {
  if (($.inArray(guess, letters))> -1) {
    alert("good letter");
  }
  else {
    alert("bad letter");
  };
}

var checkLength = function() {
  guess = $('#guess').val();
  console.log(guess);
  console.log(myRe);
  if (guess.length > 1) {
    checkWord();
  }
  else {
    checkLetter();
  };
}

$(document).ready(function(){
  submitGuess();
});
