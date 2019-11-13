

class Player {
  name = "J1";
  constructor(taille, ctx) {
    this.taille = taille;
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0].length; j++) {
        if (map[i][j] == 4) {
          this.posX = i;
          this.posY = j;
        }
      }
    }
    this.pos = [this.posX, this.posY];
    this.ctx = ctx;
    this.sAngle = Math.PI / 4;
    this.eAngle = -(Math.PI / 4);
  }

  draw() {
    for (let i = 0; i <Map2.map.length; i++) {
      for (let j = 0; j < Map2.map[0].length; j++) {
        if (Map2.map[i][j] == 4) {

          if (this.eAngle >= 0.4) {
            this.eAngle = -(Math.PI / 4);
          } else {
            this.eAngle += 0.09;
          }

          let x1 = this.posX * Map2.width + this.taille * Math.cos(Math.PI / 4);
          let y1 = this.posY * Map2.heigth+ this.taille * Math.sin(Math.PI / 4);
          ctx.fillStyle = "yellow";

          ctx.beginPath();

          ctx.arc(
            this.posX * Map2.width,
            this.posY * Map2.width,
            this.taille,
            this.sAngle,
            this.eAngle
          );

          ctx.lineTo(this.posX * Map2.width, this.posY * Map2.width);
          ctx.lineTo(x1, y1);
          ctx.stroke();
          ctx.fill();
        }
      }
    }
  }
}
