window.onload = init;
let canvas;
class Player {
  name = "J1";
  constructor(x,y,taille,ctx){
    this.name = name;
    this.taille = taille;
    this.dx = 0;
    this.dy = 0;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.sAngle = (Math.PI / 4);
    this.eAngle =  - (Math.PI / 4);
  }
   
   
   


draw(){

if (this.eAngle >=  0.4){
	this.eAngle = - (Math.PI / 4);
}
else {
	this.eAngle += 0.09;
}

 let x1 = this.x+  this.taille * Math.cos( Math.PI / 4);
 let y1 = this.y + this.taille * Math.sin(Math.PI / 4);
  ctx.fillStyle = 'yellow';
  
  ctx.beginPath();
  
  ctx.arc(this.x, this.y, this.taille, this.sAngle,this.eAngle);
  
  ctx.lineTo(this.x,this.y);
  ctx.lineTo(x1,y1);
  ctx.stroke();
  ctx.fill();
  
}


move() {
  	this.x += this.dx;
    this.y += this.dy;

  
  if(this.x + this.taille >= canvas.width) {
      
      this.x -= canvas.width;

  }
  if(this.x - this.taille <= 0){
     
      this.x += canvas.width;
  }
  
  if(this.y + this.taille >= canvas.height) {
    this.y -= canvas.height;
  } 
  
  if(this.y - this.taille <= 0) {
    this.y += canvas.height;
  }
  }
}


class Bomb{
  constructor(joueur){
    this.x = joueur.x;
    this.y = joueur.y;
    this.timer = 10;
    this.ctx = ctx;
    this.color = 'black';
  }

  draw(){

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x,this.y,20,0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
}
  changecolor(newcolor){
    this.color = newcolor;
  }

}



let P1;

document.onkeydown = function(event) {
  switch (event.keyCode) {
            case 37:            
              P1.dx = -5; 
                break;
            case 38:
                P1.dy = -5;
                break;
            case 39:
                P1.dx = 5;
                break;
            case 40:
                P1.dy = 5;
                break;
            case 32:              
               b = new Bomb(P1);
               setTimeout(function(){
                b = undefined; 
               }, b.timer);
               
               console.log(b);
               
               


        }
      }


  document.onkeyup = function(event) {
        switch (event.keyCode) {
            case 37:              
                P1.dx = 0;
                break;
            case 38:
                P1.dy = 0;
                break;
            case 39:
                P1.dx = 0;
                break;
            case 40:
                P1.dy = 0;
                break;

        }
    }
let b;
function init() {
  
  canvas = document.querySelector("#Canvas");
  

  canvas.addEventListener('keydown', onkeydown, false);
  canvas.addEventListener('keyup', onkeyup, false);
  //context graphique
  ctx = canvas.getContext("2d");
  P1 = new Player(100,100,50,ctx);
 
  requestAnimationFrame(anime60fps);
}
function anime60fps() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  P1.draw();
  P1.move();
  if (b != undefined )
  b.draw();
  
  
  requestAnimationFrame(anime60fps);
}