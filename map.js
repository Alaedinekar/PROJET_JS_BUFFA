
let ctx = this.ctx;


//map temporaire
var map = 
[[2,2,0,0,2,1,2,2,0,0,2,1],
 [2,0,2,1,0,2,2,2,0,3,2,0],
 [0,1,2,0,0,1,2,1,0,0,2,1],
 [0,0,1,1,0,0,2,1,2,0,2,2],
 [2,0,0,1,0,2,2,2,0,0,2,1],
 [2,2,1,1,2,2,0,2,0,1,2,3],
 [2,0,0,1,0,2,2,1,0,0,2,1],
 [2,0,0,1,0,2,2,2,1,0,2,0],
 [2,0,2,1,0,2,1,2,0,0,2,0],
 [2,0,0,1,0,2,2,3,0,0,2,2],
 [2,1,0,1,0,2,1,2,0,1,2,1],
 [2,0,0,1,0,2,2,1,0,0,2,1]];    // chaque numéro correspond au type de la case (mur,mur casable,chemin etc...)


var taille = map.length;       //nombre  de lignes
var taille2 = map[0].length;   // nombre de colonnes
var nbElem = taille * taille2 ; // nombre d'elements



class Case{
    constructor(ctx,longueur){
    this.ctx = ctx;
    this.longueur = longueur;
}
    

    draw(ctx){                   //dessin de la map en fonction de la matrice
        let x = 0;              //On initialise x a - longueur pour arriver à 0 sur le dessin de la première case
        let y = 0;
        

        for (let i = 0; i < map[0].length;i++ ){
            y = 0;                        //Quand on fini une colone on repart de 0
            x = this.longueur * i;               //A chaque fois qu'on fini une colonne on se décale de la longueur de la case
           
            for ( let j = 0 ; j < map[0].length ; j++){
                y = j * this.longueur;
                if (map[i][j] == 0) {
                    ctx.fillStyle = "grey";    //mur incassable
                    ctx.fillRect(x,y,this.longueur,this.longueur);
                         //On incrémente y pour faire la case suivante de la colonne
                }

                if (map[i][j] == 1) {
                    ctx.fillStyle = "yellow";  //mur cassable
                    ctx.fillRect(x,y,this.longueur,this.longueur);
                }
                if (map[i][j] == 2) {
                    ctx.fillStyle = 'blue';  //chemin normale
                    ctx.fillRect(x,y,this.longueur,this.longueur);
                }

                  if (map[i][j] == 3){
                    ctx.fillStyle = "red"   // chemin enflammé
                    ctx.fillRect(x,y,this.longueur,this.longueur);
                    
                }

            }
        }
    }
}

