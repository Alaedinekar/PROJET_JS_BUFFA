function addListeners(canvas) {
     canvas.addEventListener("keydown", onkeydown, false);
     canvas.addEventListener("keyup", onkeyup, false);
}


document.onkeydown = function (event) {
     switch (event.keyCode) {
          case 37:
               if(P1.canMoveL()){
                    P1.posX -= 1;
               }
               break;
          case 38:
               if(P1.canMoveUp())
                    P1.posY -= 1;
               break;
          case 39:
               if(P1.canMoveR())
                    P1.posX += 1;
               break;
          case 40:
               if(P1.canMoveD())
                    P1.posY += 1;
               break;
          case 32:
               b = new Bomb(P1);
               setTimeout(function () {
                    b = undefined;
               }, b.timer);

               //console.log(P1.pos);
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
     }
}
