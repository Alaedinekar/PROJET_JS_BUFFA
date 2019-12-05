class Ghosts {
	constructor(id, ctx) {
		for (let i = 0; i < Map2.map.length; i++) {
			for (let j = 0; j < Map2.map[0].length; j++) {
				if (Map2.map[i][j] == 5) {
					this.posY = i;
					this.posX = j;
				}
			}
		}
		this.taille = Map2.width;
		this.ctx = ctx;
		this.sAngle = 0;
		this.eAngle = - Math.PI;
		this.movement = [];
		this.id = id;
		this.image = new Image();
		this.image.src = "./images/ghost.png";
	}

	drawfantome() {
		let x = this.posX * Map2.width;
		let y = this.posY * Map2.width;
		for (let i = 0; i < Map2.map.length; i++) {
			for (let j = 0; j < Map2.map[0].length; j++) {
				if (Map2.map[i][j] == 5) {
					this.ctx.drawImage(
						this.image,
						x,
						y,
						this.taille,
						this.taille);
				}
			}
		}
	}


	canMoveR() {
		if (this.posX == Map2.map[0].length - 1 || Map2.map[this.posY][this.posX + 1] == 0 || Map2.map[this.posY][this.posX + 1] == 1) {
			return false;
		} else {
			let res = [this.posY, this.posX + 1];
			this.movement.push(res);
			return true;
		}
	}
	canMoveL() {
		if (this.posX == 0 || Map2.map[this.posY][this.posX - 1] == 0 || Map2.map[this.posY][this.posX - 1] == 1) {
			return false;
		} else {
			let res = [this.posY, this.posX - 1];
			this.movement.push(res);
			return true;
		}
	}
	canMoveUp() {
		if (this.PosY == 0 || Map2.map[this.posY - 1][this.posX] == 0 || Map2.map[this.posY - 1][this.posX] == 1) {
			return false;
		} else {
			let res = [this.posY - 1, this.posX];
			this.movement.push(res);
			return true;
		}
	}
	canMoveD() {
		if (this.posY == Map2.map.length - 1 || Map2.map[this.posY + 1][this.posX] == 0 || Map2.map[this.posY + 1][this.posX] == 1) {
			return false;
		} else {
			let res = [this.posY + 1, this.posX];
			this.movement.push(res);
			return true;
		}
	}
	move() {
		let rand = getRandomInt(this.movement - 1);
		this.posY = this.movement[rand][0];
		this.posX = this.movement[rand][1];
	}
	mort(){
		if(Map2.map[this.posY][this.posX] == 3){
			return true;
		}
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function spawnFantome() {
	let x, y;
	if (score % 100 >= 50) {
		f = new Ghosts(25, ctx);

		var pos = getRandomInt(Map2.map[0].length * Map2.map.length);
		y = pos / Map2.map.length;
		x = pos % Map2.map.length;
		while (Map2.map[y][x] != 2) {
			if (x == Map2.map[0].length) {
				y += 1;
			}
			if ((y == Map2.map.length) && (x == Map2.map[0].length)) {
				y = 0;
				x = 0;
			}

			Map2.map[y][x] = 5;
		}
	}
}
