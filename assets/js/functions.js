function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    if(e.key == " " &&  pauseGame == false) {
        pauseGame = true;
        console.log('pause');
        $('body').css('background', 'pink');
    }
    else if(e.key == " " && pauseGame == true) {
        pauseGame = false;
        console.log('pause');
        $('body').css('background', 'white');
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
function drawBrick(x,y, bricksWidth, bricksHeight){
    ctx.beginPath();
    ctx.rect(x, y, bricksWidth, bricksHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}
function drawBricks(){
    var brick = [];
    var bricksRows = 3;
    var bricksColumns = 11;
    var bricksWidth = 50;
    var bricksHeight = 18;
    var bricksPadding = 12;
    var bricksTop = 120;
    var bricksLeft = 20;
    for(var row = 0;row<bricksRows; row++){
        brick[row] = []; 
        for(var column = 0; column < bricksColumns; column++){
            brick[row][column] = [];
            brick[row][column].x = bricksLeft;
            brick[row][column].y = bricksTop;
            brick[row][column].active = 1;
            drawBrick(brick[row][column].x, brick[row][column].y, bricksWidth, bricksHeight);
            bricksLeft = bricksLeft + bricksWidth + bricksPadding;  
        }
        bricksLeft = 20;
        bricksTop = bricksTop + bricksHeight + bricksPadding;
    }  
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }