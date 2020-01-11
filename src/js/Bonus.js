var BonusL = [];
var timerinvincible = 0;
var freeze = 0;
var timerfreeze = 0;
class Bonus {
    constructor() {
        this.type = getRandomInt(3);
        this.color = ["red", "black", "blue"]; //la rouge augmente le nb de bombe,
        //la noir permet de manger les fantomes et la bleu permet de les ralentir
        this.bonuses = new Image();
        this.bonuses.src = "./images/bonuses.png";
        this.x = undefined;
        this.y = undefined;
    }

    draw() {
        ctx.save();
        switch(this.color[this.type]) {
            case "red":
                ctx.drawImage(this.bonuses, 0, 0, 56, this.bonuses.height, this.x * Map2.width, this.y * Map2.width, 50, 50);
                break;
            case "black":
                ctx.drawImage(this.bonuses, 56, 0, 48, this.bonuses.height, this.x * Map2.width, this.y * Map2.width, 50, 50);
                break;
            case "blue":
                ctx.drawImage(this.bonuses, 105, 0, 48, this.bonuses.height, this.x * Map2.width, this.y * Map2.width, 50, 50);
                break;
        }
        ctx.restore();
    }
}




function effetBonus(listeBonus, a, b) {
    score += 2;
    var audioBon = document.querySelector('#audioBonus');
    audioBon.play();
    audioBon.currentTime = 0

    for (let i = 0; i < listeBonus.length; i++) {
        console.log(listeBonus[i].x, listeBonus[i].y, P1.posX, P1.posY)
        if (listeBonus[i].x == a && listeBonus[i].y == b) {
            switch (listeBonus[i].type) {

                case 0:

                    P1.cptbomb = 5;
                    P1.color = "red";
                    P1.immortal = 0;
                    freeze = 0;
                    break;

                case 2:
                    console.log("freeze");
                    P1.color = "turquoise";
                    freeze = 1;
                    P1.cptbomb = 3;
                    P1.immortal = 0;
                    break;

                case 1:
                    P1.immortal = 1;
                    P1.color = "black";
                    P1.cptbomb = 3;
                    freeze = 0;
            }
            listeBonus[i] = undefined;
        }
    }
}



function spawnBonus() {
    let x, y;
    BonusL.push(new Bonus());
    var pos = getRandomInt(Map2.map.length * Map2.map.length);
    y = Math.trunc(pos / Map2.map.length);
    x = Math.trunc(pos % Map2.map.length);

    while (Map2.map[y][x] != 2) {
        if ((y == Map2.map.length) && (x == Map2.map.length)) {
            y = 0;
            x = 0;
        }

        if (x == Map2.map.length && y < Map2.map.length) {
            y += 1;
            x = 0;
        }
        x++;
    }
    BonusL[BonusL.length - 1].x = x;
    BonusL[BonusL.length - 1].y = y;
    Map2.map[y][x] = 6;
}
