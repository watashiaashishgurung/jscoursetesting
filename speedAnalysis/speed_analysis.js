let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    
    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    // Capture the end time
    endTime = new Date().getTime();
    
    // Disable further input
    document.getElementById("userInput").readOnly = true;
    
    // Calculate the time elapsed in seconds
    var timeElapsed = (endTime - startTime) / 1000;

    // Retrieve the user's typed text
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Calculate the length of the input text
    var textLength = calculateTextLength(userTypedText);

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>" +
        "<p>Text Length: " + textLength + " characters</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}

// Function to calculate the length of the input text
function calculateTextLength(text) {
    return text.length;
}