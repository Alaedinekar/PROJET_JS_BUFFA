window.onload = init;
let canvas;
//test modif

let ctx = this.ctx;

// DOCUMENTER
let Map1, P1;
let Map2;
var varmenu = 0;
var final = 0;

function init() {
  canvas = document.querySelector("#Canvas");

  addListeners(canvas);

  //context graphique
  ctx = canvas.getContext("2d");
  //Map1 = new Case(ctx, 50);
  Map2 = new Map(map, 50, 50);
  P1 = new Player(25, ctx);
  

  requestAnimationFrame(anime60fps);
}

function anime60fps() {
  /*console.log(varmenu);

  if (!varmenu){
  menu();} */
  
  clearCanvas();  
  console.log(P1.compteurbomb,P1.nbMaxBomb);
  drawMap();
  drawPlayer();
  drawBomb();
  death();
  
  
  

  
  requestAnimationFrame(anime60fps);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function menu(){
  console.log("menu");
  if (varmenu == 0){
    console.log("AAAAAAA");    
  var test = "SHREK5 HYPE  PRESS P  ";
  ctx.fillStyle ="white"; 
  ctx.fillRect(0,0,canvas.width, canvas.height);
  document.write(test.fontsize(25));
  varmenu++;
  
  }
  

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
    var fin = "GAMEOVER";
    document.write(fin.fontsize(100));
    console.log("MORT");
    final++;
    varmenu=0; 
    setTimeout(reset(),3000);  
  }
  }

  function reset(){
    clearCanvas();
    setTimeout(menu(), 3000);
  }


