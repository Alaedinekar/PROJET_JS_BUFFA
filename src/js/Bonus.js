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

function effetBonus(){
  
       
    
  
  
  switch(bounus.type){

  case 0 :
    
  P1.cptbomb = 5;
  P1.color = "red";
  break;

  case 2:
    console.log("freeze");
    P1.color = "turquoise";
    break;

  case 1:
    P1.immortal = 1;
    P1.color = "black";
  }
}



function spawnBonus(score) {
  let x, y;
	if (score % 2000 >= 1000 && BonusL == [])  {
    f = new Bonus();
    BonusL.push(f);
    

		var pos = getRandomInt(Map2.map[0].length * Map2.map.length);
		y = Math.trunc(pos / Map2.map.length);
		x = Math.trunc( pos % Map2.map.length);
		while (Map2.map[y][x] != 2) {
			if (x == Map2.map[0].length) {
				y += 1;
			}
			if ((y == Map2.map.length) && (x == Map2.map[0].length)) {
				y = 0;
				x = 0;
      }
    }
			Map2.map[y][x] = 6;
		
	}
}
