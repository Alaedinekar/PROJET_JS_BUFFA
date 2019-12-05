var posEnf = [];

class Bomb {
  constructor(posx, posy, callback) {
    this.id = undefined;
    this.x = posx;
    this.y = posy;
    this.color = "black";
    this.cligno = 1;
    this.ctpcolor = 0;

    this.callbackE = callback;
    setTimeout(this.explode, 3000);


  }

  setId = (id) => {
    this.id = id;
  }

  draw() {
    
    ctx.save();
    this.changecolor();
    
    ctx.translate(Map2.width / 2, Map2.height / 2);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x * Map2.width, this.y * Map2.height, 25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }



  changecolor = () => {

    if (this.ctpcolor == 30) {
      if (this.cligno == 1) {

        this.color = "red";
        this.cligno = 0;
      } else {

        this.color = "orange";
        this.cligno = 1;
      }
      this.ctpcolor = 0;
    } else this.ctpcolor++;
  }





  explode = () => {
    if (Map2.map[this.y][this.x] == 4){
      death();
           }
           var base;
           base = [this.y, this.x];
           posEnf.push(base);
    console.log(posEnf);
    var tabB = {
      nord: false,
      sud: false,
      est: false,
      ouest: false
    };
    this.searchRecurs(this.x, this.y, 1, tabB);
    

    this.callbackE(this);


  }

 


  searchRecurs(x, y, i, tab) {
    console.log(Map2.map[y][x]);
    Map2.map[y][x] = 3;
    var res;
    let tail = Map2.map.length;


    if (x + i >= tail || Map2.map[y][x + i] == 0) tab.est = true;
    if (y + i >= tail || Map2.map[y + i][x] == 0) tab.sud = true;
    if (x - i < 0 || Map2.map[y][x - i] == 0) tab.ouest = true;
    if (y - i < 0 || Map2.map[y - i][x] == 0) tab.nord = true;



    if (!tab.est) {

      switch (Map2.map[y][x + i]) {
        case 1:
          Map2.map[y][x + i] = 2;
          tab.est = true;
          break;

        case 2:
          (Map2.map[y][x + i] = 3);
          res = [y, x+i];
          posEnf.push(res);


          break;
        case 4:
          death();
        //Map2.cdflamme;
        case 5:
          death();
      }

    }
    if (!tab.ouest) {

      switch (Map2.map[y][x - i]) {
        case 1:
          Map2.map[y][x - i] = 2;
          tab.ouest = true;
          break;

        case 2:
          (Map2.map[y][x - i] = 3);
          res = [y, x-i];
          posEnf.push(res);

          break;
        case 4:
          death();
        //Map2.cdflamme;
      }

    }
    if (!tab.nord) {

      switch (Map2.map[y - i][x]) {
        case 1:
          Map2.map[y - i][x] = 2;
          tab.nord = true;
          break;

        case 2:
          (Map2.map[y - i][x] = 3);
          res = [y-i,x];
          posEnf.push(res);


          break;

        case 4:
          death();
        //Map2.cdflamme;
      }

    }
    if (!tab.sud) {
      switch (Map2.map[y + i][x]) {
        case 1:
          console.log(P1.chargeur);
          Map2.map[y + i][x] = 2;
          tab.sud = true;
          break;

        case 2:

          (Map2.map[y + i][x] = 3);
          res = [y+i, x];
          posEnf.push(res);


          break;
        case 4:
          death();
        //Map2.cdflamme;
      }
    }

    if (tab.est && tab.ouest && tab.sud && tab.nord) {
      return;
    }
    else {


      i++;
      return this.searchRecurs(x, y, i, tab);
    }
  }
}


function extinction(tab) {
  if(tab != []){

  for (let i = 0; i < tab.length; i++) {
    Map2.map[tab[i][0]][tab[i][1]] = 2;
  }
  posEnf= [];
  
}
}
