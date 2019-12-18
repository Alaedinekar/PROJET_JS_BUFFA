//map temporaire
var maptest = [
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

function createMap() {

    let taille = 13;
    let murIncassable = 0;
    let maxmurIncassable = 100
    let murCassable = 0;
    let maxmurCassable = 150
    res = [];
    tmp = [];
    let etape = 0;
    for (let j = 0; j < taille; j++) {
        for (let i = 0; i < taille; i++) {
            let r = getRandomInt(3);
            let p = getRandomInt(2);
            if (r == 0 && p == 1 && murIncassable < maxmurIncassable) {
                tmp.push(0);
                murIncassable++;
            }
            if (r == 1 && p == 1 && murCassable < maxmurCassable) {
                tmp.push(1);
                murCassable++;
            } else {
                tmp.push(2);

            }
        }
        res.push(tmp);
        tmp = [];
    }


    return res;
}


class Map {
    constructor(largeurPixels, hauteurPixels) {

        this.width = largeurPixels;
        this.height = hauteurPixels;
        //this.map = maptest;
        this.map = createMap();
        this.colors = ["blue", "grey", "green", "red", "green", "green", "green"];
        // incassable,cassable,chemin
    }

    draw() {
        //dessin de la map en fonction de la matrice
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.map.length; i++) {
            x = 0; //Quand on fini une colone on repart de 0
            y = this.height * i; //A chaque fois qu'on fini une colonne on se décale de la longueur de la case

            for (let j = 0; j < this.map.length; j++) {
                x = j * this.width;

                ctx.fillStyle = this.colors[this.map[i][j]];

                ctx.fillRect(x, y, this.width, this.height);

            }
        }
    }
}