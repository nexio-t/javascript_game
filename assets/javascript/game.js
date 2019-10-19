window.onload = function() {
  // List of random words
  var randomWordsList = [
    "captious",
    "fastidious",
    "adamant",
    "asperity",
    "nonplus",
    "turpitude",
    "attention",
    "highfalutin",
    "stringent",
    "bibulous",
    "blandish",
    "affluent",
    "discomfit",
    "trenchant",
    "profligate",
    "impartial",
    "insouciance",
    "agnostic",
    "redoubtable",
    "noisome",
    "stalwart",
    "brood",
    "majestic",
    "ubiquitous",
    "esoteric",
    "charming",
    "brusque",
    "torpid",
    "fastidious"
  ];

  var blankWord;
  var wrongGuess;
  var numGuesses;
  var randomWord;

  // Function that restarts game (and game stats) and generates random disguised word 
  function generateRandomWord() {
    randomWord = randomWordsList[Math.floor(Math.random() * randomWordsList.length)];
    wrongGuess = [];
    blankWord = [];
    numGuesses = randomWord.length + 5;

    // For loop that creates disguised random word
    for (var i = 0; i < randomWord.length; i++) {
      blankWord.push(" _ ");
    }

    // Reset game stats 
    document.getElementById("blankWord").innerHTML = blankWord.join(" ");
    document.getElementById("countGuesses").innerHTML = numGuesses;
    document.getElementById("lettersGuessed").innerHTML = wrongGuess.join(", ");

    console.log(randomWord);
  }

  // Set wins to zero 
  var wins = 0;
  var losses = 0; 

  // Variables storing audio 
  var audioWin = new Audio("assets/sounds/achievement.mp3");
  var audioLose = new Audio("assets/sounds/lose_.mp3");
  
  // For a key up event 
  document.onkeyup = function(event) {
    var userEnter = event.keyCode;

    // If user presses "enter"
    if (userEnter == 13) {
        
      // Then sart game 
      generateRandomWord();
        
      // Then hide welcoming display message 
      document.getElementById("pressedKey").style.display = "none";
    
      // For a second key up event 
      document.onkeyup = function(event) {

        // Store user's key in variable userKey 
        var userKey = event.key.toLowerCase();

        // Store user's keyCode in variable userKeyCode 
        var userKeyCode = event.keyCode; 

        // If disguised word includes user key, initiate for loop 
        if (randomWord.includes(userKey)) {
          
          // Then loop through each letter of the randomWord to check where user key matches 
            for (var i = 0; i < randomWord.length; i++) {

                // If the user's key press is equal to the letter of random word at index i 
                if (userKey === randomWord[i]) {

                    // Then replace the blankword underscore with user's guess at index i
                    blankWord[i] = userKey; 

                    // Then display the correctly guessed letter in the word 
                    document.getElementById("blankWord").innerHTML = blankWord.join(" ");

            }
          }
        } else {

            // If the wrong guess array doesn't already include the key press and the user key press is a letter 
            if (!wrongGuess.includes(userKey) && (userKeyCode < 91 && userKeyCode >= 65)) {

                // Then push the user's guess to the wrong guess array 
                wrongGuess.push(userKey); 

                // Then display the updated wrong guess array
                document.getElementById("lettersGuessed").innerHTML = wrongGuess.join(", "); 

                // Subtract one from guesses variable
                numGuesses--; 

                // Then display the decremented guesses variable  
                document.getElementById("countGuesses").innerHTML = numGuesses; 

            // If user runs out of guessess
            if (numGuesses === 0) {

              // Then play audio lose sound
              audioLose.play();

              // The display disguised word 
              document.getElementById("blankWord").innerHTML = randomWord.split('').join(" ");

              // Incremente losses variable 
              losses++; 

              // Display incremented loss counter to user
              document.getElementById("lossCount").innerHTML = losses;
                
              // Delay reset of game by one second so audio play before word reset 
              setTimeout(function() { generateRandomWord(); }, 3000);
              
            }
          }
        }

        // If user word match the disguised word, user wins game, audio plays, wins count updated
        if (blankWord.join("") == randomWord) {

          // Then play audio win sound 
          audioWin.play();

          // Increment win variable
          wins++;

          // Display incremented win counter to user 
          document.getElementById("winsCount").innerHTML = wins;
          
          // Delay generation of new word by one second so user may see their last key input 
          setTimeout(function() { generateRandomWord(); }, 1000);
        }
      };
    }
  };
};
