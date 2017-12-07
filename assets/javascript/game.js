	
	var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var wins = 0;
	var losses = 0;
	var guessesleft = 0;
	var guesses = "";
	var arr = [];


	function inArray(currentguess,guessarray)
	{
     	var count=guessarray.length;

     	for(var i=0; i<count; i++)
     	{
         	if(guessarray[i]===currentguess){
         		alert("The Letter you chose [ " + currentguess +" ] has already been guessed, please try again.");
       			return true;
         	}
        }
    	return false;
	}


	function begin(){

		var f = document.inputform; 

		var b = f.elements["userguess"]; 

		var userguess = (b.value);
		
		var userguess = userguess.toLowerCase();

		b.value = "";

		console.log("userguess " + userguess);

		var computerGuess = options[Math.floor(Math.random()*options.length)];

		console.log("computerguess " + computerGuess);

		if (arr.length < 9){

			if (userguess==computerGuess) {
 				// user has guessed psychic computer letter
				wins++;
				// clear all variables
				guessesleft = 10;
				guesses = "";
				
				// clear the temporary array
				for (var i = arr.length; i > 0; i--) {
 					arr.pop();
 				}

 			}
 		    else {
 				if(inArray(userguess, arr)) {
 					// check if the user has already pressed the letter 
 					// before addding to the temporary array, so get next input
 				}
 				else {
 					// user had not guessed psychic computer letter previously so
 			    	// decrement guess left counter and add the guess 
 			    	// to the array to display
 					
 					arr.push(userguess);
					guessesleft = 10 - arr.length;
					guesses = arr.toString();
 				}
 		    }

 		} 
 		else {
 			// user got to the end of their number of guesses
 			losses++;
 			// clear all variables
 			guessesleft = 10;
			guesses = "";

 			// clear the array
 			for (var i = arr.length; i > 0; i--) {
 				arr.pop();
 			}
 		}
		// redisplay variables
 		var html = "<p>Guess what letter I'm thinking of?</p>" +
 		"<p>Wins: " + wins + "</p>" +
 		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesleft + "</p>" +
 		"<p>Your Guesses so far: " + guesses + "</p>";

 		document.querySelector('#game').innerHTML = html;
	}

