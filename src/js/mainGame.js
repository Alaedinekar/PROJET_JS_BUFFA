window.onload = init;
let canvas;
//test modif

let ctx = this.ctx;

// DOCUMENTER
let Map1, P1;
let Map2;

function init() {
  canvas = document.querySelector("#Canvas");

  addListeners(canvas);

  //context graphique
  ctx = canvas.getContext("2d");
  //Map1 = new Case(ctx, 50);
  Map2 = new Map(map, 50, 50);
  P1 = new Player(25, ctx);
  b = new Bomb(P1);

  requestAnimationFrame(anime60fps);
}

function anime60fps() {
  clearCanvas();
  drawMap();
  drawPlayer();
  drawBomb();
  

  
  requestAnimationFrame(anime60fps);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawMap() {
  //Map1.draw(ctx);
  Map2.draw(ctx);

}

function drawPlayer(){
  P1.draw();
}

function drawBomb(){
  b.draw();
}
