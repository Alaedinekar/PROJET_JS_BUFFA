class Bomb {
  constructor(posx, posy) {
    this.x = posx;
    this.y = posy;
    this.timer = 3000;
    this.color = "black";
    this.cligno = 1;
    //this.cooldown = 5000;
    this.boo = 0;
    
  }

  draw() {
    ctx.save();
    ctx.translate(Map2.width/2, Map2.height/2);

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x * Map2.width, this.y * Map2.height, 25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    console.log(this.color);

    
    while (this.timer != 0) {
      this.changecolor();
      this.timer -= 1;

      b.draw();
    }
   
    
   /*if (this.boo==0){  //pour faire l'explosion
    this.explode();
    this.boo ++;

   }
*/
  }



  changecolor() {
    if (this.cligno == 1) {
      this.color = "red";
      this.cligno = 0;
    } else {
      this.color = "Purple";
      this.cligno = 1;
    }
  }




/*
  explode() {


    let res = this.x;
    let cpt = this.y;

    while (res < Map2.map[0].length) { //ligne a droite de la bombe

      switch (Map2.map[res + 1][this.y]) {
        case 1:
          Map2.map[res + 1][this.y] = 2;
          break;

        case 0:
          break;
        case 2:
          (Map2.map[res + 1][this.y] = 3);
          res += 1;
          continue;
      }
    }


    while (res != 0) { //ligne a gauche de la bombe

      switch (Map2.map[res- 1][this.y]) {
        case 1:
          Map2.map[res - 1][this.y] = 2;
          break;

        case 0:
          break;
        case 2:
          (Map2.map[res - 1][this.y] = 3);
          res -= 1;
          continue;
      }
    }

    while (cpt > 0) { //colonne au dessus de la bombe

      switch (Map2.map[this.x][cpt - 1]) {
        case 1:
          Map2.map[this.x][cpt - 1] = 2;
          break;

        case 0:
          break;
        case 2:
          (Map2.map[this.x][cpt - 1] = 3);
          cpt -= 1;
          continue;
      }
    }

    while (cpt < Map2.map.length) { //colonne en dessous de la bombe pas fini

      switch (Map2.map[this.x][cpt - 1]) {
        case 1:
          Map2.map[this.x][cpt - 1] = 2;
          break;

        case 0:
          break;
        case 2:
          (Map2.map[this.x][cpt - 1] = 3);
          cpt -= 1;
          continue;
      }

    }



    //this.timer = 3000;
  }
  
  
*/
}
