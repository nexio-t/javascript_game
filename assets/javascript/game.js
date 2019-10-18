
// DONE: when user inputs key, register that key 
// DONE: create an array with random words 
// DONE randomly select one of those words

// when user inputs correct key, display that key on the word
// when user inputs wrong key, display that key on guesses 
// when user presses any key, game starts 


// display one of those words in a disguised fashion 
    // Replace each letter of each word with underscore _
    // Display replaced word with underscore _ _ _ _ _   ("_" * randomWord.length) // find a way to loop through the word to check if each letter match .includes() -- only if it exits 

https://www.w3schools.com/howto/howto_js_toggle_password.asp

// Turn random word into array 
// Parse through array to see if the user input letter matches any of the letter (use indexOf)
    // If match, replace the found character with the letter, guess count goes up 
    // Log missed guess in another variable, display that variable 
    // If match, replace the underscore with correctly guessed letter at the right index

// (1) display alert if player wins, then reload page 
// If wrong letter already guessed, then don't decrement counter 
// If win, up the win counter by one 
// If loss, then find new randomWord 
// (2) start game when player presses "enter" 

window.onload = function() {

/*********************** Global Variables **************************/

var randomWordsList = ["plant", "cellar", "adamant", "irritate", "son", "govern", "attention", "highfalutin", "blush", "flower", "jittery", "nurse", "flaky", "achiever", "dry", "impartial", "deny", "ooze", "fill", "volcano", "light", "food", "majestic", "ubiquitous", "egg", "charming", "popcorn", "torpid", "seashore"]; 

function generateRandomWord() {
    var textWord = randomWordsList[Math.floor(Math.random()*randomWordsList.length)]; 
    return textWord; 
} 

var randomWord = generateRandomWord();  // generates random word

console.log(randomWord);

var blankWord = []; 

var wrongGuess = []; 

var wins = 0; 

var audioWin = new Audio("assets/sounds/achievement.mp3"); 

var audioLose = new Audio("assets/sounds/lose_.mp3");

var numGuesses = randomWord.length +5; 

for (var i = 0; i < randomWord.length; i++) { // for loop that generates underscore equal in length to the random word 
    blankWord.push(" _ "); 
}

document.getElementById("blankWord").innerHTML = blankWord.join(" "); // converts blankWord array into a string with a space

/*********************** On key up event **************************/

document.onkeyup = function(event) {

    var userKey = event.key.toLowerCase();

    document.getElementById("pressedKey").style.display = "none"; 

    if (randomWord.includes(userKey)) { // initiate for loop if the user's guess is included in the word 
        for (var i = 0; i < randomWord.length; i++) { // loop through each letter of the randomword 

            if (userKey === randomWord[i]) {  // examine if the user's guess is equal to each letter of random word 

                console.log(randomWord[i]);

                blankWord[i] = userKey; // if above true, then replace the blankword underscore with user's guess 

                document.getElementById("blankWord").innerHTML = blankWord.join(" ");

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
        generateRandomWord();
        

        // var again = confirm("Congrats, you got it!");
        // if (again == true) {
        //     location.reload(); 
        // } else {
        //     location.reload();
        // }

        function delayAlert() {
            setTimeout(function(){ confirm("Congrats, you figured it out! \nNow please refresh to play again!"); }, 500);
            // if (confirm) {
            //     location.reload();
            // }
        }
        delayAlert(); 

        // display the updated guess
        
        // document.getElementById("playAgain").style = "display: show";
        
        // invoke a function that randomly generates another word functionName(); 
    }

} 

}