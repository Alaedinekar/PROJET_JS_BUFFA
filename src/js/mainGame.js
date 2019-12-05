window.onload = init;
let canvas;
//test modif

let ctx = this.ctx;

// DOCUMENTER
let Map1, P1,ghost;
let Map2;

var final = 0;
let request = undefined;
var mort = 0;
var score = 0;



  


var player = document.querySelector('#audioPlayer');

function init() {
  

  canvas = document.querySelector("#Canvas");

  addListeners(canvas);

  //context graphique
  ctx = canvas.getContext("2d");
  //Map1 = new Case(ctx, 50);
  Map2 = new Map(map, 50, 50);
  P1 = new Player(25, ctx);
  ghost = new Ghosts(0,ctx);
  bounus = new Bonus();
  
  

  request = requestAnimationFrame(anime60fps);
}

function anime60fps() {
  
  
  
  clearCanvas();  
  
  drawMap();
  drawPlayer();
  drawBomb();
  bounus.draw()
  drawfantome();
  setTimeout(extinction(posEnf),1000000);
  affscore();
  
	
  
  
  request = requestAnimationFrame(anime60fps);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function menu(){
  document.getElementById("menu").setAttribute("hidden",true);
  document.getElementById("Canvas").style.display="block";
  player.play();
}

function drawfantome(){
  ghost.drawfantome();
}

function drawMap() {
    Map2.draw(ctx);

}

function affscore(){
  ctx.strokeStyle = 'red';
document.lineWidth = 1;
document.font = '36px arial';
ctx.strokeText(''+ score,50, 800);

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
  mort +=1;
  var mortsound = document.querySelector('#audioMortPlayer');

  mortsound.play();
  player.pause();

    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    document.getElementById("gameover").removeAttribute("hidden");
    cancelAnimationFrame(request);
   
    setTimeout(reset(),6000);  
  }
  

  function reset(){
    clearCanvas();
  
  }


