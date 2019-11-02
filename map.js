

//map temporaire
const map = 
[[ 2,2,0,0,2,2],
 [2,0,2,1,0,2],
 [0,1,2,0,0,1],
 [0,0,1,1,0,0],
 [2,0,0,1,0,2],
 [2,2,1,1,2,2]];           // chaque numéro correspond au type de la case (mur,mur casable,chemin etc...)


var taille = map.length;       //nombre  de lignes
var taille2 = map[0].length;   // nombre de colonnes
var nbElem = taille * taille2 ; // nombre d'elements



class Case{
    constructor(ctx,longueur){
    this.ctx = ctx;
    this.longueur = longueur;
}
    

    draw(){                              //dessin de la map en fonction de la matrice
        let x = -longueur;              //On initialise x a - longueur pour arriver à 0 sur le dessin de la première case
        let y = 0;

        for (let i = 0; map.length;i++ ){
            y = 0;                        //Quand on fini une colone on repart de 0
            x += longueur;               //A chaque fois qu'on fini une colonne on se décale de la longueur de la case
            for ( let j = 0 ; map[i].length ; j++){
                if (map[i][j] == 0) {
                    ctx.fillStyle = "grey";    //mur incassable
                    ctx.FillRect(x,y,longueur,longueur);
                    y += longueur;       //On incrémente y pour faire la case suivante de la colonne
                }

                if (map[i][j] == 1) {
                    ctx.fillStyle = "brown";  //mur cassable
                    ctx.FillRect(x,y,longueur,longueur);
                    y += longueur;
                }
                if (map[i][j] == 2) {
                    ctx.fillStyle = "green";  //chemin normale
                    ctx.FillRect(x,y,longueur,longueur);
                    y += longueur;
                }

                else  {
                    ctx.fillStyle = "red"   // chemin enflammé
                    ctx.FillRect(x,y,longueur,longueur);
                    y += longueur;
                }

            }
        }
    }
}