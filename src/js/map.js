//map temporaire
var map = [
  [4, 2, 2, 1, 2, 2, 1, 2, 2, 2],
  [2, 0, 1, 0, 1, 0, 1, 1, 0, 2],
  [2, 1, 1, 1, 0, 1, 2, 1, 1, 1],
  [2, 0, 1, 1, 1, 1, 2, 1, 1, 1],
  [1, 1, 1, 0, 2, 0, 1, 0, 1, 1],
  [1, 1, 1, 2, 5, 2, 1, 1, 1, 2],
  [1, 0, 1, 0, 2, 0, 0, 0, 1, 1],
  [2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
  [2, 0, 1, 0, 1, 0, 1, 1, 0, 2],
  [2, 2, 1, 1, 2, 2, 1, 1, 2, 2]
]; // chaque numéro correspond au type de la case (mur,mur cassable,chemin etc...)

var taille = map.length; //nombre  de lignes
var taille2 = map[0].length; // nombre de colonnes
var nbElem = taille * taille2; // nombre d'elements

class Map {
  constructor(array, largeurPixels, hauteurPixels) {
    this.nbLignes = array.length;
    this.nbColonne = array[0].length;
    this.width = largeurPixels;
    this.height = hauteurPixels;
    this.map = array;
    this.colors = ["blue", "grey", "brown", "red"];
    console.log(hauteurPixels);
    console.log("height:" ,this.height);
  }

  draw() {
    //dessin de la map en fonction de la matrice
    let x = 0;
    let y = 0;

    for (let i = 0; i < this.map[0].length; i++) {
      y = 0; //Quand on fini une colone on repart de 0
      x = this.width * i; //A chaque fois qu'on fini une colonne on se décale de la longueur de la case

      for (let j = 0; j < map[0].length; j++) {
        y = j * this.height;

        ctx.fillStyle = this.colors[this.map[i][j]]; //mur cassable
        ctx.fillRect(x, y, this.width, this.height);
      }
    }
  }
  
}
