

//map temporaire
const map = 
[[ 2,2,0,0,2,2],
 [2,0,2,1,0,2],
 [0,1,2,0,0,1],
 [0,0,1,1,0,0],
 [2,0,0,1,0,2],
 [2,2,1,1,2,2]];


var taille = map.length;       //nombre  de lignes
var taille2 = map[0].length;   // nombre de colonnes
var nbElem = taille * taille2 ; // nombre d'elements



class Case{
    constructor(ctx,longueur){
    this.ctx = ctx;
    this.longueur = longueur;
}
    

    draw(){   //dessin de la map en fonction de la matrice
        let x = 0;
        let y = 0;

        for (let i = 0; map.length;i++ ){
            y = 0;
            for ( let j = 0 ; map[i].length ; j++){
                if (map[i][j] == 0) {
                    ctx.fillStyle = "grey";    //mur incassable
                    ctx.FillRect(x,y,longueur,longueur);
                }

                if (map[i][j] == 1) {
                    ctx.fillStyle = "brown";  //mur cassable
                    ctx.FillRect(x,y,longueur,longueur);
                }
                if (map[i][j] == 2) {
                    ctx.fillStyle = "green";  //mur cassable
                    ctx.FillRect(x,y,longueur,longueur);
                }

                else  {
                    ctx.fillStyle = "red"   // chemin enflammé
                    ctx.FillRect(x,y,longueur,longueur);
                }

            }
        }
    }
}