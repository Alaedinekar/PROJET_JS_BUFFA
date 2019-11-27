window.onload = init;
let canvas;
//test modif

let ctx = this.ctx;

// DOCUMENTER
let Map1, P1;
let Map2;

var final = 0;
let request = undefined;

function init() {
  canvas = document.querySelector("#Canvas");

  addListeners(canvas);

  //context graphique
  ctx = canvas.getContext("2d");
  //Map1 = new Case(ctx, 50);
  Map2 = new Map(map, 50, 50);
  P1 = new Player(25, ctx);
  

  request = requestAnimationFrame(anime60fps);
}

function anime60fps() {
  console.log(Map2.map);
  
  clearCanvas();  
  
  drawMap();
  drawPlayer();
  drawBomb();
  death();
  
  request = requestAnimationFrame(anime60fps);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function menu(){
  document.getElementById("menu").setAttribute("hidden",true);
  document.getElementById("Canvas").style.display="block";
}

function drawMap() {
  //Map1.draw(ctx);
  Map2.draw(ctx);

}



function drawPlayer(){
  P1.draw();
}

function drawBomb(){
  for (let i = 0; i< P1.chargeur.length;i++){
    if(P1.chargeur[i] != undefined) P1.chargeur[i].draw();
  }
}

function death(){
  if (P1.mort() && final ==0) {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    document.getElementById("gameover").removeAttribute("hidden");
    cancelAnimationFrame(request);
   
    setTimeout(reset(),3000);  
  }
  }

  function reset(){
    clearCanvas();
  
  }


