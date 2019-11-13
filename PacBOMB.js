window.onload = init;
let canvas;
//test modif


let ctx = this.ctx;


//map temporaire
var map = 
[[2,2,2,1,2,2,1,2,2,2],
 [2,0,1,0,1,0,1,1,0,2],
 [2,1,1,1,0,1,2,1,1,1],
 [2,0,1,1,1,1,2,1,1,1],
 [1,1,1,0,2,0,1,0,1,1],
 [1,1,1,2,5,2,1,1,1,2],
 [1,0,1,0,2,0,0,0,1,1],
 [2,1,1,2,1,1,1,1,1,2],
 [2,0,1,0,1,0,1,1,0,2],
 [4,2,1,1,2,2,1,1,2,2]];    // chaque numéro correspond au type de la case (mur,mur cassable,chemin etc...)


var taille = map.length;       //nombre  de lignes
var taille2 = map[0].length;   // nombre de colonnes
var nbElem = taille * taille2 ; // nombre d'elements



class Case{
    constructor(ctx,longueur){
    this.ctx = ctx;
    this.longueur = longueur;
}
    

    draw(ctx){                   //dessin de la map en fonction de la matrice
        let x = 0;              //On initialise x a - longueur pour arriver à 0 sur le dessin de la première case
        let y = 0;
        

        for (let i = 0; i < map[0].length;i++ ){
            y = 0;                        //Quand on fini une colone on repart de 0
            x = this.longueur * i;               //A chaque fois qu'on fini une colonne on se décale de la longueur de la case
           
            for ( let j = 0 ; j < map[0].length ; j++){
                y = j * this.longueur;
                if (map[i][j] == 0) {
                    ctx.fillStyle = "grey";    //mur incassable
                    ctx.fillRect(x,y,this.longueur,this.longueur);
                         //On incrémente y pour faire la case suivante de la colonne
                }

                if (map[i][j] == 1) {
                    ctx.fillStyle = "yellow";  //mur cassable
                    ctx.fillRect(x,y,this.longueur,this.longueur);
                }
                if (map[i][j] == 2) {
                    ctx.fillStyle = 'blue';  //chemin normale
                    ctx.fillRect(x,y,this.longueur,this.longueur);
                }

                  if (map[i][j] == 3){
                    ctx.fillStyle = "red"   // chemin enflammé
                    ctx.fillRect(x,y,this.longueur,this.longueur);
                    
                }

                if (map[i][j] == 4){ // joueur
                     P1.draw;

              }


              if (map[i][j] == 5){ // BOMBE
                  continue;
                //b.draw;
                
            }

            }
        }
    }
}







class Player {
   name = "J1";
  constructor(taille,ctx){
    
    
    this.taille = taille;
    for(let i=0;i<map.length;i++){
      for(let j=0;j<map[0].length;j++){
        if(map[i][j] == 4){
          this.posX = j;
          this.posY = i;
        }
      }
    }
    this.pos = [this.posX,this.posY];
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
  
   let x1 = this.posX * Case.longueur +  this.taille * Math.cos( Math.PI / 4);
   let y1 = this.posY * Case.longueur + this.taille * Math.sin(Math.PI / 4);
    ctx.fillStyle = 'yellow';
  
    ctx.beginPath();
  
    ctx.arc(this.posX * Case.longueur, this.posY * Case.longueur, this.taille, this.sAngle,this.eAngle);
  
    ctx.lineTo(this.posX * Case.longueur,this.posY * Case.longueur);
    ctx.lineTo(x1,y1);
    ctx.stroke();
    ctx.fill();
    
  }
}


class Bomb{
  constructor(joueur){
    this.x = joueur.x;
    this.y = joueur.y;
    this.timer = 3000;
    this.ctx = ctx;
    this.color = 'black';
    this.posX = 0;
    this.posY = 0;
    this.cligno = 1;
  }



  draw(){

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x,this.y,20,0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  setTimeout(() => {
    this.changecolor();
  }, 500);
  //this.explode();
  
}
  
changecolor(){
    if (this.cligno == 1){
      this.color = "red";
      this.cligno = 0;
    }
    else { 
      this.color = "yellow";
      this.cligno = 1;
  }

}


      //  [posY][posX]
/*
explode(){
  
     for (let i = 0; i<taille ; i++){
       if (map[posY][i] == 0){
         break;
       }
       else if (map[posY][i] == 1 ){
         map[posY][i] = map[posY][2];
         break;
       }
        else{
          map[posY][i] = 3;
        }
       }
      

       for (let j = posX ; j<taille ; j++){
         if (map[j][posX] == 0 ){
          break;
         }
         else if (map[j][posX]  == 1){ 
           map[j][posX] = 2;
           break;
         }

         else{ 
           map[j][posX] = 3;
         }
         
       }
   

      
}
*/


}

let P1;

document.onkeydown = function(event) {
  switch (event.keyCode) {
            case 37:            
              P1.posX -=  1; 
                break;
            case 38:
                P1.posY -= 1;
                break;
            case 39:
                P1.posX += 1;
                break;
            case 40:
                P1.posY += 1;
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
                break;
            case 38:
                break;
            case 39:
                break;
            case 40:
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
  Map1 = new Case(ctx,50);
  P1 = new Player(25,ctx);
 
  requestAnimationFrame(anime60fps);
}
function anime60fps() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Map1.draw(ctx);
  
  //if (b != undefined )
 // b.draw();
  
  console.log(P1.pos);
  requestAnimationFrame(anime60fps);
}
