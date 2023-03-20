import loadImage from "./imageloader.js";
import createUI from "./userInt.js";
import cbutton from "./classes/buttonc.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "../js/assets/images/pixel-line-platformer/Tiles/tile_0053.png";
let x = 0;
let y = 0;
const speed = .5;
let i=1;
// Set up variables for game state
let gameRunning = true;
let animStart=false;
let lastFrameTimeMs = 0;
let maxFPS = 60;
let delta = 0;
let timestep = 1000 / maxFPS;
let images = [];
console.log("Starting game ");

// Define game update function
function update(delta) {
  // Update game state based on delta time
  // This runs every frame
}

// Define game render function
function render() {
  // Render the current game state
  //runs every frame
  if(animStart){
    //create user interface
    //start all animations
   // animate();
  }
}

function animateStart(images1){
  images=images1
  //console.log("Images1 l is ", images.length);
  let newclicker=new cbutton(30,30,50,50,canvas);
  newclicker.setCol("blue");
  newclicker.setText("Mybtn","white","10px");
  createUI(ctx,canvas);

  animStart=true;
}

function animate() {
  //console.log("Starting animation"+i,x,y);
  //console.log("Images is ", images.length);
   // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // for (let i = 0; i < images.length; i++) {
     ctx.drawImage(images[2], x , y );
    x += speed;
    y += speed;
    if (x > canvas.width) {
      x = 0;
    }
    if (y > canvas.height) {
      y = 0;
    }
  //}
}//end if animate 

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mouseup", handleMouseUp);
const imgpath = "../js/assets/images/pixel-line-platformer/Tiles/";
const imageurls = ["tile_0054.png","tile_0053.png","tile_0055.png"];
images = loadImage(imgpath, imageurls, animateStart);
//console.log("images is ",images.length);

//******************************
//      Start Function
// Define game loop function
//******************************
function gameLoop(timestamp) {
  // Calculate delta time since last frame
  delta += timestamp - lastFrameTimeMs;
  lastFrameTimeMs = timestamp;

  // Update game at fixed timestep
  while (delta >= timestep) {
    update(timestep);
    delta -= timestep;
  }
  // Render the game
  render();

  // Continue game loop if game is running
  if (gameRunning) {
    requestAnimationFrame(gameLoop);
  }
}

 // Define event handler functions
 function handleMouseMove(event) {
 // console.log("Mouse moved:", event.clientX, event.clientY);
}

function handleMouseDown(event) {
  //console.log("Mouse button down:", event.button);
}

function handleMouseUp(event) {
  console.log("Mouse button up:", event.button);
}


function handleKeyDown(event) {
  console.log("Key down:", event.key);
}

function handleKeyUp(event) {
  console.log("Key up:", event.key);
}

// Start the game loop
requestAnimationFrame(gameLoop);
