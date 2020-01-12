//var cptmouv = 0;

/*function sleep(ms) { //stackoverflow
     return new Promise(resolve => setTimeout(resolve, ms));
   }*/

function addListeners(canvas) {
     //cptmouv++;
     canvas.addEventListener("keydown", onkeydown, false);
     canvas.addEventListener("keyup", onkeyup, false);
}

callbackExplode = bombe => {

     let index = P1.chargeur.findIndex((element) => {
          console.log(element);
          return element.id == bombe.id
     });

     if (index >= 0) P1.chargeur.splice(index, 1);
}


document.onkeydown = function (event) {
    



     switch (event.keyCode) {
          case 37:
               if (P1.canMoveL()) {
                    if (Map2.map[P1.posY][P1.posX - 1] == 5 && P1.immortal == 0) {
                         console.log("Ghosted");
                         deathPlayer();
                    }
                    if (Map2.map[P1.posY][P1.posX - 1] == 5 && P1.immortal == 1) {
                         deathGhost(P1.posY, P1.posX - 1);
                         audiomanger.play();
                         audiomanger.currentTime = 0

                    }
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posX -= 1;
                    if (Map2.map[P1.posY][P1.posX] == 6) {
                         effetBonus(BonusL, P1.posX, P1.posY);
                    }

                    Map2.map[P1.posY][P1.posX] = 4;
                    P1.face = "west";
               }

               break;
          case 38:
               if (P1.canMoveUp()) {
                    if (Map2.map[P1.posY - 1][P1.posX] == 5 && P1.immortal == 0) {
                         console.log("GHosted");
                         deathPlayer();
                    }
                    if (Map2.map[P1.posY - 1][P1.posX] == 5 && P1.immortal == 1) {
                         deathGhost(P1.posY - 1, P1.posX);
                         audiomanger.play();
                         audiomanger.currentTime = 0
                    }
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posY -= 1;
                    if (Map2.map[P1.posY][P1.posX] == 6) {
                         effetBonus(BonusL, P1.posX, P1.posY);

                    }

                    Map2.map[P1.posY][P1.posX] = 4;
                    P1.face = "north";

               }
               break;
          case 39:

               if (P1.canMoveR()) {

                    if (Map2.map[P1.posY][P1.posX + 1] == 5 && P1.immortal == 0) {
                         console.log("GHOSted");
                         deathPlayer();
                    }
                    if (Map2.map[P1.posY][P1.posX + 1] == 5 && P1.immortal == 1) {
                         deathGhost(P1.posY, P1.posX + 1);
                         audiomanger.play();
                         audiomanger.currentTime = 0
                    }
                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posX += 1;
                    if (Map2.map[P1.posY][P1.posX] == 6) {
                         effetBonus(BonusL, P1.posX, P1.posY);

                    }

                    Map2.map[P1.posY][P1.posX] = 4;
                    P1.face = "east";


               }
               break;
          case 40:
               if (P1.canMoveD()) {
                    if (Map2.map[P1.posY + 1][P1.posX] == 5 && P1.immortal == 0) {
                         console.log("noobi");
                         deathPlayer();
                    }
                    if (Map2.map[P1.posY + 1][P1.posX] == 5 && P1.immortal == 1) {
                         deathGhost(P1.posY + 1, P1.posX);
                         audiomanger.play();
                         audiomanger.currentTime = 0
                    }

                    Map2.map[P1.posY][P1.posX] = 2;
                    P1.posY += 1;
                    if (Map2.map[P1.posY][P1.posX] == 6) {
                         effetBonus(BonusL, P1.posX, P1.posY);

                    }
                    Map2.map[P1.posY][P1.posX] = 4;
                    P1.face = "south";
               }
               break;
          case 32:

               if ((P1.chargeur.length < P1.cptbomb) && (fin == 0)) {

                    let beubon = new Bomb(P1.posX, P1.posY, callbackExplode);


                    let res = [P1.posY, P1.posX];

                    posEnf.push(res);
                    let size = P1.chargeur.push(beubon);
                    P1.cpt = P1.chargeur.length - 1;
                    beubon.setId(P1.cpt);
                    P1.cpt++;

               }

               break;
     }

}

var abouge = 0;
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
     abouge = 1;

}
