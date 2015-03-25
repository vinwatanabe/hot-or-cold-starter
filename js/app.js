$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /* Pick a random number */
    var rNumber = Math.round(Math.random()*100);
    console.log(rNumber);

    /* Defining variables */
    
    var count = 0;

    function temperature(){
      if (userGuess === rNumber){
        $('#feedback').text("Yeah! You got it.");
      }else{
        $('#feedback').text("Cold")
      }
    }

    /* Write the inserted value on the guess list */
    $('#guessButton').click(function(){
      var userGuess = $('#userGuess').val();
      $('#guessList').append("<li>" + userGuess + "</li>");

      temperature();

      count++;
      $('#count').text(count);

      $('#userGuess').val("");

      event.preventDefault();
    });
});
