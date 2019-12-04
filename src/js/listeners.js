
var cpt = 0;

function addListeners(canvas) {
     canvas.addEventListener("keydown", onkeydown, false);
     canvas.addEventListener("keyup", onkeyup, false);
}

callbackExplode = bombe => {
     
     let index = P1.chargeur.findIndex((element) => {console.log(element);
     return element.id == bombe.id});
     
    
     if(index >= 0)  P1.chargeur.splice(index,1); 
}
var time = 30;
document.onkeydown = function (event) {
    
     
     switch (event.keyCode) {

          case 37:
               
               if(P1.canMoveL()){
                    if (Map2.map[P1.posY][P1.posX - 1] == 6){
                         P1.color = "red";
                    }
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posX -= 1;
                    Map2.map[P1.posY][P1.posX] = 4;
               }
               break;
          case 38:
               if(P1.canMoveUp()){
                    if (Map2.map[P1.posY - 1][P1.posX ] == 6){
                         P1.color = "red";
                    }
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posY -= 1;
                    Map2.map[P1.posY][P1.posX] = 4;}
               break;
          case 39:
               
               if(P1.canMoveR()){
                    if (Map2.map[P1.posY][P1.posX + 1] == 6){
                         P1.color = "red";
                    }
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posX += 1;
                    Map2.map[P1.posY][P1.posX] = 4;}
               break;
          case 40:

               if(P1.canMoveD()){
                    if (Map2.map[P1.posY + 1][P1.posX ] == 6){
                         P1.color = "red";
                    }
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posY += 1;
                    Map2.map[P1.posY][P1.posX] = 4;}
               break;
          case 32:
               
                    if ((P1.chargeur.length < P1.cptbomb) ){
               
                    
                    let beubon = new Bomb(P1.posX,P1.posY,callbackExplode);
                   
                    
                    let res = [P1.posX,P1.posY];
                    
                    posEnf.push(res);
                    let size = P1.chargeur.push(beubon);  
                    beubon.setId(cpt);
                    cpt++;
                    
                    }
               
              
              // }
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
          case 32:
               break;
     }
}
