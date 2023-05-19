/*

Gamelet: a ball game
Author: Chris Minnick with modifications by Zardray
Version: 1.1

Instructions:
Include gamelet.js in an HTML document containing an element with an id of 'ball'.
The script will detect when the arrow keys are pressed and will move the ball element accordingly.

*/

const ball = document.getElementById("ball"); //Get the ball
document.addEventListener("keydown", handleKeyPress); //Listen for key presses
let xposition = 0; //Set initial x position
let yposition = 0; //Set initial y position

/*
handleKeyPress
responds to certain key presses by updating position.
*/

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    xposition = xposition - 50;
  }
  if (e.code === "ArrowRight") {
    xposition = xposition + 50;
  }
  if (e.code === "ArrowUp") {
    yposition = yposition - 50;
  }
  if (e.code === "ArrowDown") {
    yposition = yposition + 50;
  }
  if (xposition < 0) {
    xposition = 0;
  }
  if (yposition < 0) {
    yposition = 0;
  }
  refresh(); //update the ball's position
}

/*
refresh
changes the position of the ball
*/
function refresh() {
  ball.style.left = xposition + "px";
  ball.style.top = yposition + "px";
}
