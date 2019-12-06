var BonusL = [];
class Bonus{
    constructor(){
            this.type = getRandomInt(3);
            this.color = ["red","black","blue"];//la rouge augmente le nb de bombe,
            //la noir permet de manger les fantomes et la bleu permet de les ralentir
           
            for (let i = 0; i < Map2.map.length; i++) {
                for (let j = 0; j < Map2.map[0].length; j++) {
                  if (Map2.map[i][j] == 6) {
                    this.x = j;
                    this.y = i;   
                  }
                }
              }
              BonusL.push(this);
              console.log(BonusL);
    
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

function effetBonus(y,x){
  
  for (let i = 0;i<=BonusL.length;i++){     
    
  if (BonusL[i].y == y &&  BonusL[i].x == x){
  
  switch(BonusL[i].color){

  case("red") :
    
  P1.cptbomb = 5;
  P1.color = "red";
  break;

  case "blue":
    console.log("freeze");
    P1.color = "turquoize";
    break;

  case "black":
    P1.immortal = 1;
    P1.color = "black";
  }
}
}
}