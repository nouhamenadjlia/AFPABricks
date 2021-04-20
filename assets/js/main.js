var canvas = document.getElementById('myGame');
var ctx = canvas.getContext('2d');




var pauseGame = false;
var rightPressed = false;
var leftPressed = false;
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









function playGame(){
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


  if (pauseGame !== true ){
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
  }

console.log(score);
}
function startGame(){
  setInterval(playGame, 20);
}
function endGame(){
  alert('End Game!');
  window.location.reload();
}