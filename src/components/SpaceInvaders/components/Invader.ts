import invader1 from "../sprites/invader1.png";
import invader2_3 from "../sprites/invader2-3.png";
import invader3_4 from "../sprites/invader3-4.png";
import { Game } from "./Game";
import { Projectile } from "./Projectile";

interface IInvader {
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
	image: HTMLImageElement;
	animationSpeed: number;
	game: Game;
	points: number;
}

export class Invader {
	props: IInvader;
	spriteWidth: number;
	spriteHeight: number;
	frame = 0;
	currentDirection: "left" | "right" = "right";

	constructor({ x, y, width, height, speed, image, animationSpeed, game, points }: IInvader) {
		this.props = { x, y, width, height, speed, image, animationSpeed, game, points };
		this.spriteWidth = 57;
		this.spriteHeight = 38;
	}

	moveLeft = () => (this.props.x -= this.props.speed);

	moveRight = () => (this.props.x += this.props.speed);

	moveDown = () => (this.props.y += this.props.height);

	updateInvader = (direction: "left" | "right", gameFrame: number) => {
		if (this.currentDirection != direction) {
			// Change direction and move down when the invader reaches the edge of the canvas
			this.moveDown();
			this.currentDirection = direction;
			return;
		}
		// If the invader is not at the edge of the canvas, continue moving in the current direction
		if (direction === "left") this.moveLeft();
		if (direction === "right") this.moveRight();

		// Update the frame of the invader's animation
		if (gameFrame % this.props.animationSpeed === 0) {
			this.frame > 0 ? (this.frame = 0) : this.frame++;
		}
	};

	fire = () => {
		const projectile = new Projectile({
			height: 10,
			width: 3,
			speed: 10,
			x: this.props.x + this.props.width / 2 - 2,
			y: this.props.y,
			color: "white",
			direction: "down",
			game: this.props.game,
		});

		return projectile;
	};

	draw = () => {
		const { context } = this.props.game.props;
		// Draw the invader on the canvas
		if (this.props.image) {
			context.drawImage(this.props.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.props.x, this.props.y, this.props.width, this.props.height);
		}
	};
}

interface IInvaders {
	game: Game;
}

export class Invaders {
	props: IInvaders;
	invadersCount = 55;
	invader1 = new Image();
	invader2_3 = new Image();
	invader3_4 = new Image();
	animationSpeed = 70;
	alive: Invader[] = [];
	speed = 5;
	currentDirection: "left" | "right";

	constructor({ game }: IInvaders) {
		this.props = { game };
		this.invader1.src = invader1;
		this.invader2_3.src = invader2_3;
		this.invader3_4.src = invader3_4;
		this.currentDirection = "right";

		this.createInvaders();
	}

	updateDirection = () => {
		const { game } = this.props;

		const hitLeftWall = this.alive.some((invader) => invader.props.x <= 5);
		const hitRightWall = this.alive.some((invader) => invader.props.x + invader.props.width + 5 >= game.props.width);

		if (hitLeftWall) {
			this.currentDirection = "right";
		}

		if (hitRightWall) {
			this.currentDirection = "left";
		}
	};

	createInvaders = () => {
		const { game } = this.props;
		const invaderWidth = 32;
		const invaderHeight = 24;
		const invaderPadding = 20;
		const invaderOffsetTop = 30;
		const invaderOffsetLeft = 30;

		const invaders: Invader[] = [];

		for (let i = 0; i < this.invadersCount; i++) {
			const invaderX = (i % 11) * (invaderWidth + invaderPadding - 5) + invaderOffsetLeft + 20; // Calculate the X position of the invader
			const invaderY = Math.floor(i / 11) * (invaderHeight + invaderPadding) + invaderOffsetTop; // Calculate the Y position of the invader

			if (i < 11) {
				// first row from top
				const invader = new Invader({
					x: invaderX,
					y: invaderY,
					width: invaderWidth,
					height: invaderHeight,
					speed: this.speed,
					image: this.invader1,
					animationSpeed: this.animationSpeed,
					game,
					points: 30,
				});
				invaders.push(invader);
			}

			if (i < 33 && i >= 11) {
				// second and thrird row from top
				const invader = new Invader({
					x: invaderX,
					y: invaderY,
					width: invaderWidth,
					height: invaderHeight,
					speed: this.speed,
					image: this.invader2_3,
					animationSpeed: this.animationSpeed,
					game,
					points: 20,
				});
				invaders.push(invader);
			}

			if (i < 55 && i >= 33) {
				// fourth and fifth row from top
				const invader = new Invader({
					x: invaderX,
					y: invaderY,
					width: invaderWidth,
					height: invaderHeight,
					speed: this.speed,
					image: this.invader3_4,
					animationSpeed: this.animationSpeed,
					game,
					points: 10,
				});
				invaders.push(invader);
			}
		}

		this.alive = invaders;
	};

	updateInvaders = (gameFrame: number) => {
		const { game } = this.props;
		const invadersArrayLength = this.alive.length;
		let speedChanged = false;

		// Adjust the animation speed and invader speed based on the number of remaining invaders
		if (invadersArrayLength < 44 && this.animationSpeed != 30 && this.speed != 6) {
			this.speed = 6;
			this.animationSpeed = 30;
			speedChanged = true;
		}
		if (invadersArrayLength < 33 && this.animationSpeed != 20 && this.speed != 7) {
			this.speed = 7;
			this.animationSpeed = 20;
			speedChanged = true;
		}
		if (invadersArrayLength < 22 && this.animationSpeed != 10 && this.speed != 8) {
			this.speed = 8;
			this.animationSpeed = 10;
			speedChanged = true;
		}
		if (invadersArrayLength < 11 && this.animationSpeed != 5 && this.speed != 10) {
			this.speed = 10;
			this.animationSpeed = 5;
			speedChanged = true;
		}
		if (invadersArrayLength === 1 && this.animationSpeed != 1 && this.speed != 11) {
			this.speed = 11;
			this.animationSpeed = 1;
			speedChanged = true;
		}

		if (speedChanged) {
			// Update the animation speed and speed for each invader
			this.alive.forEach((invader) => {
				invader.props.speed = this.speed;
				invader.props.animationSpeed = this.animationSpeed;
			});
			speedChanged = false;
		}

		if (this.alive.length > 0 && gameFrame % this.animationSpeed === 0) {
			// Update invaders' positions and animations
			this.updateDirection();
			this.alive.forEach((invader) => {
				invader.updateInvader(this.currentDirection, gameFrame);
			});
		}

		if (this.alive.length > 0 && gameFrame % this.animationSpeed === 0) {
			const randomInvader = Math.floor(Math.random() * this.alive.length);

			if (gameFrame % 25 === 0 && game.projectiles.invader.length < 3) {
				game.projectiles.invader.push(this.alive[randomInvader].fire());
			}
		}

		if (this.alive.some((invader) => invader.props.y > 550)) {
			game.props.setGameOverMessage("Invaders have reached the ground! You lose!");
			game.props.setGameOver(true);
		}

		if (this.alive.length === 0) {
			game.props.setGameOverMessage("You win!");
			game.props.setGameOver(true);
		}
	};

	handleCollision = () => {
		const playerProjectilesToRemove: { index: number }[] = [];
		const invadersToRemove: { index: number }[] = [];
		const { game } = this.props;
		// Check if any of the invaders have been hit by a projectile
		this.alive.forEach((invader, i) => {
			game.projectiles.defender.forEach((projectile, p) => {
				if (
					projectile.props.x > invader.props.x &&
					projectile.props.x < invader.props.x + invader.props.width &&
					projectile.props.y > invader.props.y &&
					projectile.props.y < invader.props.y + invader.props.height
				) {
					playerProjectilesToRemove.push({ index: p });
					invadersToRemove.push({ index: i });

					game.score += invader.props.points;
				}
			});
		});

		// Remove the playerProjectiles and invaders that collided
		if (playerProjectilesToRemove.length > 0 || invadersToRemove.length > 0) {
			for (let i = invadersToRemove.length - 1; i >= 0; i--) {
				this.alive.splice(invadersToRemove[i].index, 1);
			}

			for (let i = playerProjectilesToRemove.length - 1; i >= 0; i--) {
				game.projectiles.defender.splice(playerProjectilesToRemove[i].index, 1);
			}
		}
	};

	draw = () => {
		this.alive.forEach((invader) => invader.draw());
	};

	destroy = () => {
		this.invadersCount = 0;
		this.alive = [];
	};
}
