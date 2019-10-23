


const map = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];

var murF = new Wall();
const typeStatique = [murF,murIndes,sol ];


class WallIndest{
    constructor(ctx,longueur){
    this.ctx = ctx;
    this.longueur = longueur;
}
    

    draw(){
        let x = 0;
        let y = 0;

        for (let i = 0; map.length;i++ ){
            y = 0;
            for ( let j = 0 ; map[i].length ; j++){
                if (map[i][j] == 0) {
                    ctx.fillStyle = "grey";
                    ctx.FillRect(x,y,longueur,longueur);
                }

                if (map[i][j] == 1) {
                    ctx.fillStyle = "brown";
                    ctx.FillRect(x,y,longueur,longueur);
                }

                else  {
                    ctx.fillStyle = "green"
                    ctx.FillRect(x,y,longueur,longueur);
                }

            }
        }
    }
}