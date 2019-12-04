class Bonus{
    constructor(){
            this.type = getRandomInt(3);
            this.color = ["red","black","blue"];
           
            for (let i = 0; i < Map2.map.length; i++) {
                for (let j = 0; j < Map2.map[0].length; j++) {
                  if (Map2.map[i][j] == 6) {
                    this.x = j;
                    this.y = i;   
                  }
                }
              }
    
}

draw(){

    for (let i = 0; i <Map2.map.length; i++) {
        for (let j = 0; j < Map2.map[0].length; j++) {
          if (Map2.map[i][j] == 6) {

            ctx.save();
                 

          ctx.translate(Map2.width/2,Map2.height/2 );
    
        
        

        ctx.fillStyle = this.color[this.type];
        ctx.beginPath();
        ctx.arc(this.x * Map2.width, this.y * Map2.width,25, 0,2*Math.PI );
        ctx.stroke();
        ctx.fill();
        ctx.restore();
    
}
}
    }
  }
}