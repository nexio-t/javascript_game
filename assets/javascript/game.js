window.onload = function() {
  // List of random words
  var randomWordsList = [
    "plant",
    "cellar",
    "adamant",
    "irritate",
    "son",
    "govern",
    "attention",
    "highfalutin",
    "blush",
    "flower",
    "jittery",
    "nurse",
    "flaky",
    "achiever",
    "dry",
    "impartial",
    "deny",
    "ooze",
    "fill",
    "volcano",
    "light",
    "food",
    "majestic",
    "ubiquitous",
    "egg",
    "charming",
    "popcorn",
    "torpid",
    "seashore"
  ];

  var blankWord;
  var wrongGuess;
  var numGuesses;
  var randomWord;

  // Function that generates random disguised word and restarts game
  function generateRandomWord() {
    randomWord =
      randomWordsList[Math.floor(Math.random() * randomWordsList.length)];
    wrongGuess = [];
    blankWord = [];
    numGuesses = randomWord.length + 5;
    // for loop that generates underscore equal in length to the random word
    for (var i = 0; i < randomWord.length; i++) {
      blankWord.push(" _ ");
    }

    document.getElementById("blankWord").innerHTML = blankWord.join(" ");
    document.getElementById("countGuesses").innerHTML = numGuesses;
    document.getElementById("lettersGuessed").innerHTML = wrongGuess.join(", ");

    console.log(randomWord);
    // return randomWord;
  }

  var wins = 0;

  var audioWin = new Audio("assets/sounds/achievement.mp3");

  var audioLose = new Audio("assets/sounds/lose_.mp3");

  // converts blankWord array into a string with a space

  /*********************** On key up event **************************/

  document.onkeyup = function(event) {
    var userEnter = event.keyCode;

    console.log(userEnter);

    if (userEnter == 13) {
      generateRandomWord();
    
      document.getElementById("pressedKey").style.display = "none";
      // console.log(newWord);

      document.onkeyup = function(event) {
        var userKey = event.key.toLowerCase();

        

        if (randomWord.includes(userKey)) {
          // initiate for loop if the user's guess is included in the word
          for (var i = 0; i < randomWord.length; i++) {
            // loop through each letter of the randomWord

            if (userKey === randomWord[i]) {
              // examine if the user's guess is equal to each letter of random word

              console.log(randomWord[i]);

              blankWord[i] = userKey; // if above true, then replace the blankword underscore with user's guess

              document.getElementById("blankWord").innerHTML = blankWord.join(
                " "
              );

              console.log(blankWord.join("") + "test");

              document.getElementById("countGuesses").innerHTML = numGuesses; //display guesses left
            }
          }
        } else {
          if (!wrongGuess.includes(userKey)) {
            wrongGuess.push(userKey); // if above false, then push user's guess to another array

            document.getElementById("lettersGuessed").innerHTML = wrongGuess.join(", "); // then, display that wrong guess

            numGuesses--; // subtract one from numGuesses for wrong guess

            document.getElementById("countGuesses").innerHTML = numGuesses; //display the decremented numGuesses

            if (numGuesses === 0) {
              audioLose.play();
              var okay = confirm("Dang, try again!");
              if (okay == true) {
                location.reload();
              } else {
                location.reload();
              }
            }
          }
        }

        if (blankWord.join("") == randomWord) {
          audioWin.play();
          wins++;
          document.getElementById("winsCount").innerHTML = wins;
          
          setTimeout(function() { generateRandomWord(); }, 1000);

          // var again = confirm("Congrats, you got it!");
          // if (again == true) {
          //     location.reload();
          // } else {
          //     location.reload();
          // }

          // function delayAlert() {
          //     setTimeout(function(){ confirm("Congrats, you figured it out! \nNow please refresh to play again!"); }, 500);
          //     // if (confirm) {
          //     //     location.reload();
          //     // }
          // }
          // delayAlert();

          // display the updated guess

          // document.getElementById("playAgain").style = "display: show";

          // invoke a function that randomly generates another word functionName();
        }
      };
    }
  };
};
