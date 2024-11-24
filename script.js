const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let   
 dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y,   
 20, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  x += dx;
  y += dy;   


  // Bounce off walls
  if (x + dx > canvas.width - 20 || x + dx < 20) {
    dx = -dx;
  }
  if (y + dy > canvas.height - 20 || y + dy < 20) {
    dy = -dy;
  }
}

setInterval(draw, 10);
