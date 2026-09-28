const story = document.getElementById("story-text");
const gameContainer = document.getElementById("game-container");
const buttonContainer = document.getElementById("button-container");

//first scene after clicking "Play"
function scene1() {
	story.innerHTML = "You wake up in mysterious building, and have no idea where you are or how you got there. What do you do?"  ; 

	buttonContainer.innerHTML = "<button onclick='scene2()'    >Check behind the paintings</button><button onclick='scene3()'  >Check the door</button>";

	gameContainer.style.backgroundImage = "url('https://play-lh.googleusercontent.com/FML7-ZkgBdeHjoXFqAXl1x8_X6zucLWxVCbxy2LN5Met97QGGvnhKHLrIqI3OsNJlg=w526-h296-rw')";
 }   

//second scene
function scene2() { 
	story.innerHTML = "You find four buttons in the drawer, which of the buttons should you press?"  ; 

	buttonContainer.innerHTML = "<button onclick = 'gameOver()'>Blue</button><button onclick = 'gameOver()'>Green</button><button onclick = 'win()'>Red</button><button onclick = 'gameOver()'>Yellow</button><button onclick = 'scene1()'    >Go back</button>" ;  

	gameContainer.style.backgroundImage = "url('https://m.media-amazon.com/images/I/31ov3OYQr6L._UF1000,1000_QL80_.jpg')" ; 
} 

//third scene
function scene3() { 
	story.innerHTML = "You find a picture with a red button painted on it, you think it might correlate to something..."  ;    

	buttonContainer.innerHTML = "<button onclick = 'scene1()'    >Go back</button>" ;     

	gameContainer.style.backgroundImage = "url('https://images.stockcake.com/public/7/e/7/7e796c5c-0e97-4807-a101-7c4b5affa1ad_large/mysterious-red-button-stockcake.jpg')" ;   
} 

//"game over" scene
function gameOver() {
	story.innerHTML = "Suddenly, an alarm rings and some evil man attacked! <strong>GAME OVER!</strong>"  ; 

	buttonContainer.innerHTML = "<button onclick='scene1()'    >Try again</button>" ; 

	gameContainer.style.backgroundImage = "url('https://media.gettyimages.com/id/1325433246/video/game-over-text-animation-with-alpha-channel-4k.jpg?s=640x640&k=20&c=aZM_cNmjuXVVkLm12evzXTU0qFhAu3Vh2_2W_h-eq3c=')" ;  
}

//"win" scene
function win() {
	story.innerHTML = "You decide to click the red button. The door opens and you exit the building with glee. <strong>You win!</strong>"  ;  

	buttonContainer.innerHTML =  "<button  onclick = 'scene1()'    >Play again</button>" ;  

	gameContainer.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/01/46/72/35/360_F_146723571_zB8yGSQye44pWBiUWZBdWIMxSdSm8Vuy.jpg')" ; 
}
   