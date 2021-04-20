var canvas = document.getElementById('myGame');
var ctx = canvas.getContext('2d');



// Circle
/* ctx.beginPath();
ctx.arc(240, 320, 20, 0, Math.PI*2, false);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath(); */


/// Rectangle
/* ctx.beginPath();
var wRect = Math.floor(Math.random()*700);
var hRect = Math.floor(Math.random()*300);
ctx.rect(20,40,wRect,hRect);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath(); */

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var rightPressed = false;
var leftPressed = false;
function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
  }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var score = 0;
var playerWidth = 100;
var playerHeight = 20;
var xPlayer = canvas.width/2 - (playerWidth / 2);
var yPlayer = canvas.height - playerHeight;
var ballRadius = 10;
var xMovement = -3;
var yMovement = 3;
x = 240;
y = 320;

var randomColor = getRandomColor();
var randomBackground = getRandomColor();


function clearDrawing(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
}
function drawbackground(){
  ctx.beginPath();
ctx.rect(0,0,canvas.width,canvas.height);
ctx.fillStyle = randomBackground;
ctx.fill();
ctx.closePath();
}
function drawBall(){
  // Dessine des objets
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
  ctx.fillStyle = randomColor;
  ctx.fill();
  ctx.closePath();
}
function drawPlayer(){
  ctx.beginPath();
  ctx.rect(xPlayer, canvas.height - 20, playerWidth, playerHeight);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}


function drawBrick(x,y){
  ctx.beginPath();
  ctx.rect(x, y, bricksWidth, bricksHeight);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function drawBricks(){
  
var brick = Array();
var bricksRows = 3;
var bricksColumns = 11;
var bricksWidth = 50;
var bricksHeight = 18;
var bricksPadding = 12;
var bricksTop = 120;
var bricksLeft = 20;
  for(var row = 0;row<bricksRows; row++){
    for(var column = 0; column < bricksColumns; column++){
      brick[row][column].x = bricksLeft;
      brick[row][column].y = bricksTop;
      brick[row][column].active = 1;
      drawBrick(brick[row][column].x, brick[row][column].y);


      bricksLeft = bricksLeft + bricksWidth + bricksPadding; 
    }
    bricksLeft = 20;
    bricksTop = bricksTop + bricksHeight + bricksPadding;
  }  
}





function display(){
  clearDrawing();
  drawbackground();      
  drawPlayer();
  drawBricks();                           
  drawBall(x, y, ballRadius);
 
 
  if(x + xMovement > canvas.width-ballRadius || x + xMovement < ballRadius){
    xMovement = -xMovement;
    randomColor = getRandomColor();
    randomBackground = getRandomColor();
  }
  if(y + yMovement < ballRadius){
    yMovement = -yMovement;
  }
  if(y + yMovement > canvas.height-ballRadius){
    if( y + yMovement + 20 > yPlayer && x + xMovement >= xPlayer && x + xMovement <= xPlayer + playerWidth     ){
      yMovement = -yMovement;
      score += 10;
    }else if(y+10 == canvas.height){
      endGame();
    }
    randomColor = getRandomColor();
  } 
  if( rightPressed ){
    if(xPlayer + playerWidth >= canvas.width ){
      xPlayer = canvas.width - playerWidth;
    }else{
      xPlayer = xPlayer + 5;
    }
  }
  if( leftPressed ){
    if(xPlayer <= 0 ){
      xPlayer = 0;
    }else{
      xPlayer = xPlayer - 5;
    }
  }
  
  
  
  x += xMovement;
  y += yMovement;

console.log(score);
}
function startGame(){
  setInterval(display, 20);
}
function endGame(){
  alert('End Game!');
  window.location.reload();
}