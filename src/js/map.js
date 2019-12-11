//map temporaire
var map = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 1, 0, 2, 0, 1, 1, 0, 2],
  [2, 1, 1, 1, 2, 1, 2, 1, 1, 2],
  [2, 0, 1, 1, 2, 1, 2, 1, 1, 2],
  [2, 2, 1, 0, 2, 0, 1, 0, 1, 2],
  [2, 1, 1, 2, 2, 2, 1, 1, 1, 2],
  [2, 0, 1, 0, 2, 0, 1, 0, 1, 2],
  [2, 1, 1, 2, 2, 1, 1, 1, 1, 2],
  [2, 0, 1, 0, 2, 0, 1, 1, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
]; // chaque numéro correspond au type de la case (mur,mur cassable,chemin etc...)

function createMap(taille){
  res=[];
  tmp = [];
  let etape = 0;
  for (let j=0;j<taille;j++){
  for (let i =0;i<taille;i++){
    tmp.push(getRandomInt(3));
  }
  res.push(tmp);
  tmp = [];
  }
 
 return res;
}





class Map {
  constructor(array, largeurPixels, hauteurPixels) {
    this.nbLignes = array.length;
    this.nbColonne = array[0].length;
    this.width = largeurPixels;
    this.height = hauteurPixels;
    this.map = array;
    this.colors = ["blue", "grey", "green", "red", "green", "green", "green"];
    // incassable,cassable,chemin



  }

  draw() {
    //dessin de la map en fonction de la matrice
    let x = 0;
    let y = 0;


    for (let i = 0; i < this.map[0].length; i++) {
      x = 0;                 //Quand on fini une colone on repart de 0
      y = this.height * i; //A chaque fois qu'on fini une colonne on se décale de la longueur de la case

      for (let j = 0; j < this.map[0].length; j++) {
        x = j * this.width;


        ctx.fillStyle = this.colors[this.map[i][j]];
        ctx.fillRect(x, y, this.width, this.height);


      }
    }
  }
}

