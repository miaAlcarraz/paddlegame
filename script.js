// canvas creator
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d'); //"ctx = context"
var y = 0;
var x = 27;
var paddleX = 100;
var score = 0;
var ballCaught = false;

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
  if(e.keyCode == 39){
    rightPressed = true;
  }
  if(e.keyCode == 37){
    leftPressed = true;
  }
}

function keyUpHandler(e){
  if(e.keyCode == 39){
    rightPressed = false;
  }
  if(e.keyCode == 37);{
    leftPressed = false;
  }
}

function draw(){
  ctx.clearRect(0,0,480,320); // (x-top, y-top, x-bottom, y-bottom) (0, 0, 450, 320)
  // draw circle
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2); //(x-pos, y-pos, radius, 0, Math*PI)
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

    // draw paddle
  ctx.beginPath();
  ctx.rect(paddleX, 310, 80, 10);  //rect(x-position, y-position, size-width, size-height) (100,310,80,10)
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();

  // draw the score
  ctx.font = "16px Arial";
  ctx.fillstyle = "#0095DD";
  ctx.fillText("Score:"+score,0,20);

  y += 2;

  if ((y > 310 ) &&( x > paddleX - 40 ) && ( x < paddleX + 40) ){
    ballCaught = true;
    score++;
  }

  if (ballCaught){
    y -= 2;
  } else {
    y += 2;
  }

  if(rightPressed){
    paddleX += 7;
  }

  if(leftPressed){
    paddleX -= 7;
  }

  if (y >= 320){
    y = 0;
    x = Math.random() * (canvas.height);
  }
}


setInterval(draw, 10);
