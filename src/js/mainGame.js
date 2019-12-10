




//window.onload = init;
let canvas;
//test modif

let ctx = this.ctx;

// DOCUMENTER
let Map1, P1, ghost;
let Map2;

var final = 0;
let request = undefined;
var mort = 0;
var score = 0;
var canSpawnBonus = true;
var canSpawnGhost = true;
var GhostL = [];





var player = document.querySelector('#audioPlayer');

function init() {


  canvas = document.querySelector("#Canvas");

  addListeners(canvas);

  //context graphique
  ctx = canvas.getContext("2d");
  //Map1 = new Case(ctx, 50);
  Map2 = new Map(map, 50, 50);
  P1 = new Player(25, ctx);


  setInterval(() => {
    canSpawnBonus = true;
  }, 5000);

  setInterval(() => {
    canSpawnGhost = true;
  }, 4000);

  request = requestAnimationFrame(anime60fps);
}

function anime60fps() {


  clearCanvas();

  drawMap();
  drawPlayer();
  drawBomb();


  //spawnFantome(score);
  if (canSpawnBonus) {
    canSpawnBonus = false;
    spawnBonus();

  }

  if (canSpawnGhost) {
    canSpawnGhost = false;
    spawnFantome();
  }

  BonusL = BonusL.filter(b => b !== undefined);
  GhostL = GhostL.filter(b => b !== undefined);

  if (BonusL != []) {
    for (let i = 0; i < BonusL.length; i++) {
      if (BonusL[i] !== undefined)
        BonusL[i].draw();
    }
  }

  if (GhostL != []) {
    for (let i = 0; i < GhostL.length; i++) {
      if (GhostL[i] !== undefined)
        GhostL[i].draw();
    }
  }

  extinction(posEnf);//posEnf liste des cases enflammés

  //affscore();

  /* if (abouge == 1){
   GhostL.forEach(element =>{
     if(element.cooldown == 0){
       element.move();
       element.cooldown = 200;
     }else{
       element.cooldown -= 0,2;
     }});
   }*/



  request = requestAnimationFrame(anime60fps);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function menu() {
  // player.play();

  document.getElementById("menu").setAttribute("hidden", true);
  document.getElementById("Canvas").style.display = "block";
  init();

}

/*function drawfantome(){
  GhostL.forEach(element => {
    element.draw();
  });
}
*/
function drawMap() {
  Map2.draw(ctx);

}

function affscore() {


  ctx.strokeStyle = 'red';
  document.lineWidth = 1;
  document.font = '36px arial';
  ctx.strokeText('' + score, 50, 800);

}


function drawPlayer() {
  P1.draw();
}

function drawBomb() {
  for (let i = 0; i < P1.chargeur.length; i++) {
    if (P1.chargeur[i] != undefined) P1.chargeur[i].draw();
  }
}

function deathPlayer() {
  mort += 1;
  var mortsound = document.querySelector('#audioMortPlayer');

  mortsound.play();
  player.pause();

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  document.getElementById("gameover").removeAttribute("hidden");
  cancelAnimationFrame(request);

  setTimeout(reset(), 6000);
}


function deathGhost(y, x) {
  for (let i = 0; i < GhostL.length; i++) {
    if (GhostL[i].posY == y && GhostL[i].posX == x) {
      (Map2.map[GhostL[i].posY][GhostL[i].posX] = 2);
      GhostL[i] = undefined;
    }
  }
  console.log(Map2.map);

}

function reset() {
  clearCanvas();

}
