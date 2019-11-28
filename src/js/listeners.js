
var cpt = 0;

function addListeners(canvas) {
     canvas.addEventListener("keydown", onkeydown, false);
     canvas.addEventListener("keyup", onkeyup, false);
}

callbackExplode = bombe => {
     console.log(bombe.id)
     let index = P1.chargeur.findIndex((element) => {console.log(element);
     return element.id == bombe.id});
     console.log("index :",index);
    
     if(index >= 0)  P1.chargeur.splice(index,1); 
}

document.onkeydown = function (event) {
     
     switch (event.keyCode) {

          case 37:
               ctx.save();
               ctx.rotate(Math.PI) //tentative de rotation du perso
               ctx.restore();
               if(P1.canMoveL()){
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posX -= 1;
                    Map2.map[P1.posY][P1.posX] = 4;
               }
               break;
          case 38:
               if(P1.canMoveUp()){
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posY -= 1;
                    Map2.map[P1.posY][P1.posX] = 4;}
               break;
          case 39:
               
               if(P1.canMoveR()){
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posX += 1;
                    Map2.map[P1.posY][P1.posX] = 4;}
               break;
          case 40:

               if(P1.canMoveD()){
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posY += 1;
                    Map2.map[P1.posY][P1.posX] = 4;}
               break;
          case 32:
               console.log(P1.chargeur);
               
               //let index = P1.chargeur.findIndex((element) => {
                 //   return element.x == P1.posX && element.y == P1.posY});
               //if(index < 0) { 
                    let beubon = new Bomb(P1.posX,P1.posY,callbackExplode);
                    let size = P1.chargeur.push(beubon);  
                    beubon.setId(cpt);
                    cpt++;
                    console.log(P1.chargeur)
               
              
              // }
               break;
          
               case 48:
               console.log("ppppp");
               varmenu = 0;
               
               break;

               
     }
     
}


document.onkeyup = function (event) {
     switch (event.keyCode) {
          case 37:
               break;
          case 38:
               break;
          case 39:
               break;
          case 40:
               break;
          case 48:
               break;
          case 32:
               break;
     }
}
