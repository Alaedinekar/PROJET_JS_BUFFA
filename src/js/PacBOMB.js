

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
  canMoveR(){

   
      console.log(this.posX);
    if(this.posX==map[0].length ||map[this.posY][this.posX + 1] == 0 || map[this.posY][this.posX + 1] == 1){
      return false;
    }else{
      return true;
    }
  }
  canMoveL(){
    if(this.posX==0 || map[this.posY][this.posX - 1] == 0 || map[this.posY][this.posX - 1] == 1){
      return false;
    }else{
      return true;
    }
  }
  canMoveUp(){
    
    if(this.PosY==0){
      
      return false;
    }
    if(this.PosY==0 ||map[this.posY-1][this.posX] == 0 || map[this.posY-1][this.posX] == 1){
      return false;
    }else{
      return true;
    }
  }
  canMoveD(){
    if (this.posY==map.length || [this.posY+1][this.posX] == 0 || map[this.posY+1][this.posX] == 1){
      return false;
    }else{
      return true;
    }
  }
  draw() {
    console.log(this.posX, this.posY);
    for (let i = 0; i <Map2.map.length; i++) {
      for (let j = 0; j < Map2.map[0].length; j++) {
        if (Map2.map[i][j] == 4) {
          ctx.save();
          ctx.translate(this.posX,this.posY);
          

          ctx.translate(Map2.width/2,Map2.height/2 );
          console.log(Map2.height);

          if (this.eAngle >= 0.4) {
            this.eAngle = -(Math.PI / 4);
          } else {
            this.eAngle += 0.09;
          }

          let x1 = this.posX * Map2.width + this.taille * Math.cos(Math.PI / 4);
          let y1 = this.posY * Map2.height+ this.taille * Math.sin(Math.PI / 4);
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
          ctx.restore();
        }
      }
    }
  }
}
