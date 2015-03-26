$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

    /* variables */
    var count;
    var rNumber;
    var userGuess;
    var won;

    /* generating a random number */
    function generateRandomNumber(){
      rNumber = Math.round(Math.random()*100);
      console.log(rNumber);
    }

    /* counting the guesses and add to guess list */
    function countGuess(userNumber){
      $('#guessList').append("<li>" + userNumber + "</li>");

      count++;
      $('#count').text(count);

      $('#userGuess').val("");
    }


    /* start a new game */
    function newGame(){
      generateRandomNumber();

      count = 0;
      $('#count').text(count);

      $('#guessList').empty();

      $('#feedback').text("Make your Guess!");

      won = false;
    }

    /* game status */
    function gameStatus(){
      if (won === false){
        userGuess = parseInt($('#userGuess').val());
        checkTemperature(userGuess);
      } else if (won === true){
        $('#feedback').text("You won. Start a new game!");
        won = true;
      }
    }

    /* checking the temperature */
    function checkTemperature(guess){
      if (guess === rNumber){
        $('#feedback').text("Yeah! You got it.");
        countGuess(guess);
        won = true;
      } else if(isNaN(guess) || guess === " "){
        $('#feedback').text("Type only numbers");
      } else if (guess <= rNumber + 10 && guess >= rNumber - 10){
        $('#feedback').text("Hot");
        countGuess(guess);
      } else if (guess <= rNumber + 20 && guess >= rNumber - 20){
        $('#feedback').text("Cold");
        countGuess(guess);
      } else if (guess !== rNumber){
        $('#feedback').text("Very Cold");
        countGuess(guess);
      } 
    }

    $('#guessButton').click(function(){
      gameStatus();

      event.preventDefault();
    });

    $('.new').click(function(){
      newGame();
    });

    newGame();
});
