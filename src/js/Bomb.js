var posEnf = [];

class Bomb {
    constructor(posx, posy, callback) {
        this.id = undefined;
        this.x = posx;
        this.y = posy;
        this.color = "black";
        this.cligno = 1;
        this.ctpcolor = 0;
        this.bomb = new Image();
        this.bomb.src = "./images/bomb.png";
        this.callbackE = callback;
        setTimeout(this.explode, 3000);


    }

    setId(id) {
        this.id = id;
    }

    draw() {
        ctx.save();
        ctx.drawImage(this.bomb, this.x * Map2.width, this.y * Map2.height, 50, 50);
        ctx.restore();
    }


    explode = () => {
        
        
        audioExp.play();
        audioExp.currentTime = 0
        console.log(P1.immortal)
        if (Map2.map[this.y][this.x] == 4 && P1.immortal == 0) {
            console.log(P1.immortal)
            deathPlayer();
        }

        if (Map2.map[this.y][this.x] == 5) {
            deathGhost(this.y, this.x);
        }
        var base;
        base = [this.y, this.x];
        posEnf.push(base);

        var tabB = {
            nord: false,
            sud: false,
            est: false,
            ouest: false
        };
        this.searchRecurs(this.x, this.y, 1, tabB);


        this.callbackE(this);
        P1.cpt--;
        console.log(P1.cpt);
    }

    searchRecurs(x, y, i, tab) {
        Map2.map[y][x] = 3;
        var res;
        let tail = Map2.map.length;


        if (x + i >= tail || Map2.map[y][x + i] == 0) tab.est = true;
        if (y + i >= tail || Map2.map[y + i][x] == 0) tab.sud = true;
        if (x - i < 0 || Map2.map[y][x - i] == 0) tab.ouest = true;
        if (y - i < 0 || Map2.map[y - i][x] == 0) tab.nord = true;



        if (!tab.est) {

            switch (Map2.map[y][x + i]) {
                case 1:
                    Map2.map[y][x + i] = 2;
                    tab.est = true;
                    break;

                case 2:
                    (Map2.map[y][x + i] = 3);
                    res = [y, x + i];
                    posEnf.push(res);


                    break;
                case 4:
                    if (P1.immortal == 0) {
                        deathPlayer();
                    } else {
                        tab.est = true;
                    }
                    break;

                case 5:
                    deathGhost(y, x + i);
                    break;
            }

        }
        if (!tab.ouest) {

            switch (Map2.map[y][x - i]) {
                case 1:
                    Map2.map[y][x - i] = 2;
                    tab.ouest = true;
                    break;

                case 2:
                    (Map2.map[y][x - i] = 3);
                    res = [y, x - i];
                    posEnf.push(res);

                    break;
                case 4:
                    if (P1.immortal == 0) {
                        deathPlayer();
                    } else {
                        tab.ouest = true;
                    }

                case 5:
                    deathGhost(y, x - i);
                    break;
            }

        }
        if (!tab.nord) {

            switch (Map2.map[y - i][x]) {
                case 1:
                    Map2.map[y - i][x] = 2;
                    tab.nord = true;
                    break;

                case 2:
                    (Map2.map[y - i][x] = 3);
                    res = [y - i, x];
                    posEnf.push(res);


                    break;

                case 4:
                    if (P1.immortal == 0) {
                        deathPlayer();
                    } else {
                        tab.nord = true;
                    }

                case 5:
                    deathGhost(y - i, x);
                    break;
            }

        }
        if (!tab.sud) {
            switch (Map2.map[y + i][x]) {
                case 1:
                    console.log(P1.chargeur);
                    Map2.map[y + i][x] = 2;
                    tab.sud = true;
                    break;

                case 2:

                    (Map2.map[y + i][x] = 3);
                    res = [y + i, x];
                    posEnf.push(res);


                    break;
                case 4:
                    if (P1.immortal == 0) {
                        deathPlayer();
                    } else {
                        tab.sud = true;
                    }

                case 5:
                    deathGhost(y + i, x);

                    break;
            }
        }

        if (tab.est && tab.ouest && tab.sud && tab.nord) {
            return;
        } else {


            i++;
            return this.searchRecurs(x, y, i, tab);
        }
    }
}


function extinction(tab) {
    if (tab != []) {

        for (let i = 0; i < tab.length; i++) {
            Map2.map[tab[i][0]][tab[i][1]] = 2;
        }
        posEnf = [];

    }
}
