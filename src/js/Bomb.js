class Bomb {
  constructor(posx, posy, callback) {
    this.id = undefined;
    this.x = posx;
    this.y = posy;
    this.timer = 3000;
    this.color = "black";
    this.cligno = 1;
    //this.cooldown = 5000;
    this.boo = 0;
    this.ctpcolor =0;
    this.callbackE = callback;
    setTimeout(this.explode,3000);

    
  }

  setId = (id) => {
    this.id = id;
  }

  draw() {
    
    ctx.save();
    this.changecolor();
    //console.log(this.color);
    ctx.translate(Map2.width/2, Map2.height/2);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x * Map2.width, this.y * Map2.height, 25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    console.log(this.x);

    /*
    while (this.timer != 0) {
      
      this.timer -= 1;
    }*/
   
    
   /*if (this.boo==0){  //pour faire l'explosion
    this.explode();
    this.boo ++;

   }
*/
  }



  changecolor = () => {
    
    if(this.ctpcolor == 30){
      if (this.cligno == 1) {
      
        this.color = "red";
        this.cligno = 0;
      } else {
        
        this.color = "Purple";
        this.cligno = 1;
      }
      this.ctpcolor = 0;
    } else this.ctpcolor++;
  }





  explode = () => {
    var tabB = {
      nord: false,
      sud: false,
      est: false,
      ouest: false
    };
    this.searchRecurs(this.x,this.y,1,tabB);
    
    this.callbackE(this);


  }



  
  searchRecurs(x,y,i,tab)  {
    
    let tail = Map2.map.length;
  
    
    if(x+i >= tail || Map2.map[y][x+i] == 0) tab.est = true;
    if(y+i >= tail || Map2.map[y+i][x] == 0) tab.sud = true;
    if(x-i < 0 || Map2.map[y][x-i] == 0) tab.ouest = true;
    if(y-i < 0 || Map2.map[y-i][x] == 0) tab.nord = true;

    
    if(!tab.est){
      console.log(i);
      switch (Map2.map[y][x+i]) {
        case 1:
          Map2.map[y][x+i] = 2;
          tab.est = true;
          break;
        
        case 2:
          (Map2.map[y][x+i] = 3);
          
          break;
          //Map2.cdflamme;
      } 

    }
    if(!tab.ouest){
      console.log(i);
      switch (Map2.map[y][x-i]) {
        case 1:
          Map2.map[y][x-i] = 2;
          tab.ouest = true;
          break;
        
        case 2:
          (Map2.map[y][x-i] = 3);
          
          break;
          //Map2.cdflamme;
      } 

    }
    if(!tab.nord){
      console.log(i);
      switch (Map2.map[y-i][x]) {
        case 1:
          Map2.map[y-i][x] = 2;
          tab.nord = true;
          break;
        
        case 2:
          (Map2.map[y-i][x] = 3);
          
          break;
          //Map2.cdflamme;
      }

    }
    if(!tab.sud){
      switch (Map2.map[y+i][x]) {
        case 1:
            console.log(P1.chargeur);
          Map2.map[y+i][x] = 2;
          tab.sud = true;
          break;
        
        case 2:
            console.log(i);
          (Map2.map[y+i][x] = 3);
          
          break;
          //Map2.cdflamme;
      }
      

    }

    if(tab.est && tab.ouest && tab.sud && tab.nord) {
      
      return;
    }
    else {
      console.log(tab);
      
      i++;
      return this.searchRecurs(x,y,i,tab);
    }
    //console.log(tab);
    
  }


  
    


  
  
  

}
