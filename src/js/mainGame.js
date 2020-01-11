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
var audiomanger = document.querySelector('#audiomanger');

function init() {
    canvas = document.querySelector("#Canvas");

    addListeners(canvas);


    //context graphique
    ctx = canvas.getContext("2d");

    Map2 = new Map(50, 50);


    P1 = new Player(25, ctx);
    spawnJoueur(P1);


    setInterval(() => {
        if (abouge == 1)
        canSpawnBonus = true;
    }, 5000);

    setInterval(() => {
        canSpawnGhost = true;
    }, 3500);

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

    extinction(posEnf); //posEnf liste des cases enflammés

    //affscore();

    if (abouge == 1 && GhostL != []) {
        GhostL.forEach(element => {
            if (element.cooldown == 0 && freeze == 0) {
                element.move();
                element.cooldown = 100;
                if (element.posX == P1.posX && element.posY == P1.posY && element.cantkill == 0) {
                    deathPlayer();
                }
            } else {
                element.cooldown -= 1;
            }
        });
    }


    //document.getElementById("SCORE").innerText = "";
    document.getElementById("SCORE").innerText = score;
    request = requestAnimationFrame(anime60fps);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function menu() {
     player.play();
    document.getElementById("menu").setAttribute("hidden", true);
    document.getElementById("Canvas").style.display = "block";
    document.getElementById("SCORE").style.display = "block";
    document.getElementById("credit").style.display = "none";
    init();
}


function drawMap() {
    Map2.draw(ctx);
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
    console.log("a");
    mort += 1;
    var mortsound = document.querySelector('#audioMortPlayer');

    mortsound.play();
    player.pause();

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("gameover").removeAttribute("hidden");
    cancelAnimationFrame(request);

    setTimeout(reset(), 6000);

    document.getElementById("Canvas").remove();
}

function deathGhost(y, x) {
    console.log("score + 10");
    score += 10;
    for (let i = 0; i < GhostL.length; i++) {
        if (GhostL[i].posY == y && GhostL[i].posX == x) {
            (Map2.map[GhostL[i].posY][GhostL[i].posX] = 2);
            GhostL[i] = undefined;
        }
    }
    GhostL = GhostL.filter(g => g !== undefined);
}

function reset() {
    clearCanvas();
}

/*
function abc(score){
    var
    if score >
}*/

var cred = 0;
function credit(){
    
    if (cred == 0 || rule == 1){
        document.getElementById("rules").style.display = "none";
        rule= 0;
        document.getElementById("credit").style.display = "block";
        cred = 1;
    }
    else {
        document.getElementById("credit").style.display = "none";
        cred = 0;
    }
}

var rule = 0;
function rules(){
    
    if (rule == 0 || cred == 1){
        document.getElementById("credit").style.display = "none";
        cred = 0;
        document.getElementById("rules").style.display = "block";
        rule = 1;
    }
    else {
        document.getElementById("rules").style.display = "none";
        rule = 0;
    }
}