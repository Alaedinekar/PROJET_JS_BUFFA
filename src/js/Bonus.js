var BonusL = [];
class Bonus {
  constructor() {

    this.type = getRandomInt(3);
    this.color = ["red", "black", "blue"];//la rouge augmente le nb de bombe,
    //la noir permet de manger les fantomes et la bleu permet de les ralentir

    this.x = undefined;
    this.y = undefined;

    console.log(BonusL);

  }

  draw() {
    ctx.save();
    ctx.translate(Map2.width / 2, Map2.height / 2);
    ctx.fillStyle = this.color[this.type];
    ctx.beginPath();
    ctx.arc(this.x * Map2.width, this.y * Map2.width, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

  }
}




function effetBonus(listeBonus,x,y) {
   
  for (let i = 0; i < listeBonus.length; i++) {
    console.log(listeBonus[i].x, listeBonus[i].y, P1.posX, P1.posY)
    if(listeBonus[i].x == x && listeBonus[i].y == y){
      switch (listeBonus[i].type) {

        case 0:

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
      listeBonus[i] = undefined;
    }
  }  
}



function spawnBonus(score) {

  let x, y;
  if (score % 1000 >= 500) {
    

    BonusL.push(new Bonus());
    


    var pos = getRandomInt(Map2.map[0].length * Map2.map.length);
    y = Math.trunc(pos / Map2.map.length);
    x = Math.trunc(pos % Map2.map.length);
    console.log(x,y);
    while (Map2.map[y][x] != 2) {
      console.log("bbbbbbbbbbbb");
      if (x == Map2.map[0].length && y<Map2.map.length ) {
        y += 1;
        x=0;

      }
      if ((y == Map2.map.length) && (x == Map2.map[0].length)) {
        y = 0;
        x = 0;
      }
      x++;
    }
    BonusL[BonusL.length - 1].x = x;
    BonusL[BonusL.length - 1].y = y;
    Map2.map[y][x] = 6;


  }


}
