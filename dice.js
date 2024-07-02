var Randomnumber1=Math.floor(Math.random()*(6 )+1);
console.log(Randomnumber1);
var img1=document.getElementsByClassName("img1")[0];
// RANDOMNUMBER
if(img1){
switch (Randomnumber1) {
    case 1:
        img1.src="images/dice1.png";
            break;
    case 2:
        img1.src="images/dice2.png";
            break;
    case 3:
        img1.src="images/dice3.png" ; 
            break;
    case 4:
        img1.src="images/dice4.png" ; 
            break;  
    case 5:
        img1.src="images/dice5.png" ; 
            break;  
    case 6:
        img1.src="images/dice6.png" ; 
            break;         
    default:
        break;
}
}
// for dice 2
var Randomnumber2=Math.floor(Math.random()*(6 )+1);
console.log(Randomnumber2);
var img2=document.getElementsByClassName("img2")[0];
// RANDOMNUMBER
if(img2){
switch (Randomnumber2) {
    case 1:
        img2.src="images/dice1.png";
            break;
    case 2:
        img2.src="images/dice2.png";
            break;
    case 3:
        img2.src="images/dice3.png" ; 
            break;
    case 4:
        img2.src="images/dice4.png" ; 
            break;  
    case 5:
        img2.src="images/dice5.png" ; 
            break;  
    case 6:
        img2.src="images/dice6.png" ; 
            break;         
    default:
        break;
}
}

// Play audio files
function playAudio(filePath) {
    var audio = new Audio(filePath);
    audio.play().catch(error => console.error('Error playing audio:', error));
}

if (Randomnumber1 === Randomnumber2) {
    document.querySelector("h1").innerText = "Draw !❤️";
    var draw="draw";
    playAudio("audio/"+draw+".mp3");
   
} else if (Randomnumber1 > Randomnumber2) {
    document.querySelector("h1").innerText = "😄Player X Wins";
    var win="win";
    playAudio("audio/"+win+".mp3");
} 
else  {
    document.querySelector("h1").innerText = "😊Player Y Wins";
    var winy="winy";
    playAudio("audio/"+winy+".mp3");
}