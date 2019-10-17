
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

 
window.onload = function() {

var randomWordsList = ["plant", "cellar", "adamant", "irritate", "harass", "highfalutin", "charming", "popcorn", "torpid", "seashore"]; 

var randomWord = randomWordsList[Math.floor(Math.random()*randomWordsList.length)]; // generates random word 

var blankWord = []; 


for (var i = 0; i < randomWord.length; i++) {
    blankWord.push("_"); 
}

document.getElementById("blankWord").innerHTML = blankWord.join(" "); // converts blankWord array into a string with a space

document.onkeyup = function(event) {

    var userKey = event.key.toLowerCase();

    document.getElementById("pressedKey").style.display = "none"; 

    if (randomWord.includes(userKey)) {
        for (var i = 0; i < randomWord.length; i++) {
            if (userKey === randomWord[i]) {  
                blankWord[i] === userKey; // replace 
            } else {
                // pass it through to failed guesses 
            }
        }
    } 

}


}