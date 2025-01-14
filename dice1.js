// Wrap the dice rolling logic in a function
function rollDice() {
    // First dice
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    console.log("Dice 1:", randomNumber1);
    
    var img1 = document.getElementsByClassName("img1")[0];
    if (img1) {
        img1.src = `images/dice${randomNumber1}.png`;
    }

    // Second dice
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    console.log("Dice 2:", randomNumber2);
    
    var img2 = document.getElementsByClassName("img2")[0];
    if (img2) {
        img2.src = `images/dice${randomNumber2}.png`;
    }

    // Play audio and update result
    determineWinner(randomNumber1, randomNumber2);
}

// Function to play audio with proper setup
async function playAudio(filePath) {
    try {
        const audio = new Audio(filePath);
        // Wait for audio to be loaded before playing
        await audio.load();
        // Add event listener for when audio is ready
        audio.addEventListener('canplaythrough', () => {
            audio.play().catch(error => console.error('Error playing audio:', error));
        }, { once: true });
    } catch (error) {
        console.error('Error setting up audio:', error);
    }
}

// Function to determine winner and play appropriate sound
function determineWinner(num1, num2) {
    const resultHeader = document.querySelector("h1");
    
    if (num1 === num2) {
        resultHeader.innerText = "Draw !❤️";
        playAudio("audio/draw.mp3");
    } else if (num1 > num2) {
        resultHeader.innerText = "😄Player X Wins";
        playAudio("audio/win.mp3");
    } else {
        resultHeader.innerText = "😊Player Y Wins";
        playAudio("audio/winy.mp3");
    }
}

// Add HTML button and event listener when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create and add the roll button
    const rollButton = document.createElement('button');
    rollButton.innerText = 'Roll Dice';
    rollButton.style.cssText = `
         position: fixed; /* Fix button's position on the page */
        top: 10px; /* Place it 10px from the top */
        left: 50%; /* Center it horizontally */
        transform: translateX(-50%); /* Adjust position for centering */
        background-color: green;
        color: white;
        width: 190px;
        height: 50px;
        font-size: 30px;
        text-align: center;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        z-index: 1000; /* Ensure the button stays on top of other elements */
        
    `;
    
    // Add button to the document
    document.body.appendChild(rollButton);
    
    // Add click event listener to the button
    rollButton.addEventListener('click', rollDice);
});