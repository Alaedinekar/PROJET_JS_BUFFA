class Ghosts {
	constructor(ctx) {
		this.posX = undefined;
		this.posY = undefined;
		this.vitesse = 25;
		this.taille = Map2.width;
		this.ctx = ctx;
		this.sAngle = 0;
		this.eAngle = - Math.PI;
		this.movement = [];
		this.cooldown = 100;
		this.id = GhostL.indexOf(this);
		this.image = new Image();
		this.image.src = "./images/ghost.png";
	}

	draw() {
		let x = this.posX * Map2.width;
		let y = this.posY * Map2.width;

		this.ctx.drawImage(
			this.image,
			x,
			y,
			this.taille,
			this.taille);



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

		let distanceX = this.posX - P1.posX;
		let distanceY = this.posY - P1.posY;
		let rand = getRandomInt(this.movement.length - 1);

		if (distanceX < 0 && this.canMoveL()) {
			Map2.map[this.posY][this.posX - 1] = 5;
			this.posX -= 1;
		}
		if (distanceX > 0 && this.canMoveR()) {
			Map2.map[this.posY][this.posX + 1] = 5;
			this.posX += 1;
		}
		if (distanceY < 0 && this.canMoveD()) {
			Map2.map[this.posY + 1][this.posX] = 5;
			this.posY += 1;
		}
		if (distanceY > 0 && this.canMoveUp()) {
			Map2.map[this.posY - 1][this.posX] = 5;
			this.posY -= 1;
		} else {
			console.log(this.movement);
			if(this.movement[rand]){
				this.posX = this.movement[rand][0];
				this.posY = this.movement[rand][1];
			}
			Map2.map[this.posY][this.posX] = 5;
		}
	}

	mort() {
		GhostL.splice(indexOf(this), 1);
	}
}


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function spawnFantome() {
	let x, y;

	GhostL.push(new Ghosts(ctx));

	var pos = getRandomInt(Map2.map[0].length * Map2.map.length);
	y = Math.floor(pos / Map2.map.length);
	x = Math.floor(pos % Map2.map.length);
	while (Map2.map[y][x] != 2) {
		if (x == Map2.map[0].length) {
			y += 1;
			x = 0;
		}
		if ((y == Map2.map.length) && (x == Map2.map[0].length)) {
			y = 0;
			x = 0;
		}
		x++;
	}
	GhostL[GhostL.length - 1].posX = x;
	GhostL[GhostL.length - 1].posY = y;
	Map2.map[y][x] = 5;
}