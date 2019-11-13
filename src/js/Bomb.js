class Bomb {
    constructor(joueur) {
      this.x = joueur.x;
      this.y = joueur.y;
      this.timer = 3000;
      this.ctx = ctx;
      this.color = "black";
      this.posX = 0;
      this.posY = 0;
      this.cligno = 1;
    }
  
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fill();
      setTimeout(() => {
        this.changecolor();
      }, 500);
      //this.explode();
    }
  
    changecolor() {
      if (this.cligno == 1) {
        this.color = "red";
        this.cligno = 0;
      } else {
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
   
*/
      
}
