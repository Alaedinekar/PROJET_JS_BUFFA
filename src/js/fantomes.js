window.onload = init;
let canvas;

class Ghosts{
	constructor(taille,ctx){
    	for (let i = 0; i < Map2.map.length; i++) {
      		for (let j = 0; j < Map2.map[0].length; j++) {
        		if (Map2.map[i][j] == 5) {
          			this.posX = i;
          			this.posY = j;
        		}
      		}
    	}
		this.taille = taille;
    	this.ctx = ctx;
    	this.sAngle = 2 * Math.PI ;
    	this.eAngle = - Math.PI;
	}

  	draw(){
  		ctx.save();
  		ctx.fillStyle = "yellow";
  		ctx.beginPath();
  		ctx.translate(this.x + 100,this.y + 100);
  		ctx.rotate(180 * Math.PI / 180);
  		ctx.arc(
  			this.x,
            this.y,
            this.taille,
            this.sAngle,
            this.eAngle);
  		ctx.lineTo(this.x - this.taille,this.y - this.taille);
  		ctx.lineTo(this.x - 10,this.y - 10);
  		ctx.lineTo(this.x,this.y - this.taille);
  		ctx.lineTo(this.x + 10,this.y - 10);
  		ctx.lineTo(this.x + this.taille,this.y - this.taille);
  		ctx.lineTo(this.x + this.taille,this.y);
  		ctx.arc(this.x + 10,this.y + 10,10,0,2 * Math.PI);
  		ctx.stroke();
  		ctx.fill();
  		ctx.restore();
  	}

  	draweye(){
  		ctx.save();
  		ctx.fillStyle = "black";
  		ctx.beginPath();
  		ctx.arc(this.x - 10,this.y - 10,5,0,2 * Math.PI);
  		ctx.arc(this.x + 10,this.y - 10,5,0,2 * Math.PI);
  		ctx.stroke();
  		ctx.fill();
  		ctx.restore();
  	}

  	canMoveR(){   
    	if(this.posX==Map2.map[0].length - 1 ||Map2.map[this.posY][this.posX + 1] == 0 || Map2.map[this.posY][this.posX + 1] == 1){
      		return false;
    	}else{
      		return true;
    }
  }
  	canMoveL(){
    	if(this.posX==0 || Map2.map[this.posY][this.posX - 1] == 0 || Map2.map[this.posY][this.posX - 1] == 1){
      	return false;
    	}else{
      	return true;
    	}
 	}
  	canMoveUp(){
    	if(this.PosY==0 ||Map2.map[this.posY-1][this.posX] == 0 || Map2.map[this.posY-1][this.posX] == 1){
      		return false;
    	}else{
      		return true;
    	}
  	}
  	canMoveD(){
  		if (this.posY==Map2.map.length -1|| Map2.map[this.posY+1][this.posX] == 0 || Map2.map[this.posY+1][this.posX] == 1){
    		return false;
    	}else{
      		return true;
    	}
  	}
}

function init(){
  canvas = document.querySelector("#Canvas");
  ctx = canvas.getContext("2d");
  ghost = new Ghosts(100,100,25,ctx);
  requestAnimationFrame(anime60fps);
}


function anime60fps(){
	ghost.draw();
	ghost.draweye(); 
	requestAnimationFrame(anime60fps);
}