class Player {
    name = "J1";
    constructor(taille, ctx) {
        this.taille = taille;

        this.posX = undefined;
        this.posY = undefined;

        this.color = "yellow";

        // this.vitesse = 3000;
        this.ctx = ctx;
        this.sAngle = Math.PI / 4;
        this.eAngle = -(Math.PI / 4);
        this.chargeur = [];
        this.cptbomb = 3;
        this.immortal = 0;
        this.cpt = 0;
        this.face = "east";
    }

    thereisBombL(){
        this.chargeur.forEach(element => {
            if(this.posY - 1 == element.x){
                return true;
            }
        });
        return false;
    }
    
    thereisBombR(){
        this.chargeur.forEach(element => {
            if(this.posY + 1 == element.x){
                return true;
            }
        });
        return false;
    }
    
    thereisBombU(){
        this.chargeur.forEach(element => {
            if(this.posX - 1 == element.x){
                return true;
            }
        });
        return false;
    }
    
    thereisBombD(){
        this.chargeur.forEach(element => {
            if(this.posX + 1 == element.x){
                return true;
            }
        });
        return false;
    }


    canMoveR() {

        if (this.posX == Map2.map.length - 1 || Map2.map[this.posY][this.posX + 1] == 0 || Map2.map[this.posY][this.posX + 1] == 1 || this.thereisBombR()) {
            return false;
        } else {
            return true;
        }
    }
    canMoveL() {

        if (this.posX == 0 || Map2.map[this.posY][this.posX - 1] == 0 || Map2.map[this.posY][this.posX - 1] == 1 || this.thereisBombL()) {
            return false;
        } else {
            return true;
        }
    }
    canMoveUp() {

        if (this.PosY == 0 || Map2.map[this.posY - 1][this.posX] == 0 || Map2.map[this.posY - 1][this.posX] == 1 || this.thereisBombU()) {
            return false;
        } else {
            return true;
        }
    }
    canMoveD() {

        if (this.posY == Map2.map.length - 1 || Map2.map[this.posY + 1][this.posX] == 0 || Map2.map[this.posY + 1][this.posX] == 1 || this.thereisBombD()) {
            return false;
        } else {
            return true;
        }
    }


    mort() {

        if (Map2.map[this.posY][this.posX] == 3) {
            console.log("BURNED");
            return true;
        }else if(Map2.map[this.posY][this.posX] == 5){
            console.log("GHOSTED");
            return true;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.posX *Map2.width, this.posY*Map2.height);
        ctx.translate(Map2.width / 2, Map2.height / 2);

        if (this.eAngle >= 0.4) {
            this.eAngle = -(Math.PI / 4);
        } else {
            this.eAngle += 0.09;
        }

        let x1 = this.taille * Math.cos(Math.PI / 4);
        let y1 = this.taille * Math.sin(Math.PI / 4);

        ctx.fillStyle = this.color;
        switch (this.face) {

            case "north":
                this.ctx.rotate(-Math.PI / 2);
               // this.ctx.moveTo(this.posY * Map2.width, this.posX * Map2.height);
                break;
            case "south":
                this.ctx.rotate(Math.PI / 2);
               // this.ctx.moveTo(this.posY * Map2.width, this.posX * Map2.height);
                break;
            case "east":
               // this.ctx.rotate(-Math.PI);
               // this.ctx.moveTo(this.posY * Map2.width, this.posX * Map2.height);
                break;
            case "west":
                this.ctx.rotate(Math.PI);
                //this.ctx.moveTo(this.posY * Map2.width, this.posX * Map2.height);
                break;
        }
        fragile(this);

        ctx.beginPath();


        ctx.arc(
            0 * Map2.width,
             0 * Map2.width,
            this.taille,
            this.sAngle,
            this.eAngle
        );

        ctx.lineTo(0, 0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
        ctx.fill();
        ctx.restore();
    }
}


function spawnJoueur(joueur) {
    let x = 0;
    let y = 0;

    while (Map2.map[y][x] != 2) {

        if (x == Map2.map[0].length && y < Map2.map.length) {
            y += 1;
            x = 0;

        }
        if ((y == Map2.map.length) && (x == Map2.map[0].length)) {
            y = 0;
            x = 0;
        }
        x++;
    }
    joueur.posX = x;
    joueur.posY = y;
    Map2.map[y][x] = 4;
}

function fragile(joueur) {

    if (joueur.color == "black" && timerinvincible == 500) {
        joueur.color = "yellow";
        joueur.immortal = 0;
        timerinvincible = 0;
    }
    if (joueur.color == "black" && timerinvincible < 500) {
        timerinvincible++;
    }
    if (joueur.color == "turquoise" && timerinvincible == 500) {
        joueur.color = "yellow";
        joueur.immortal = 0;
        timerinvincible = 0;
        timerfreeze = 0;
        freeze = 0;
    }
    if (joueur.color == "turquoise" && timerinvincible < 500) {
        timerinvincible++;
    }

    if (joueur.color == "turquoise" && timerfreeze < 200) {
        timerfreeze++;
    }

    if (joueur.color == "red" && timerinvincible == 500) {
        joueur.color = "yellow";
        joueur.immortal = 0;
        timerinvincible = 0;
    }
    if (joueur.color == "red" && timerinvincible < 500) {
        timerinvincible++;
    }
}