import invader1 from "../sprites/invader1.png";
import invader2_3 from "../sprites/invader2-3.png";
import invader3_4 from "../sprites/invader3-4.png";
import { Projectile } from "./Projectile";

interface IInvader {
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
	image: HTMLImageElement;
	animationSpeed: number;
}

export class Invader {
	props: IInvader;
	spriteWidth: number;
	spriteHeight: number;
	frame = 0;
	currentDirection: "left" | "right" = "right";

	constructor({ x, y, width, height, speed, image, animationSpeed }: IInvader) {
		this.props = { x, y, width, height, speed, image, animationSpeed };
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
		});

		return projectile;
	};

	draw = (context: CanvasRenderingContext2D) => {
		// Draw the invader on the canvas
		if (this.props.image) {
			context.drawImage(this.props.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.props.x, this.props.y, this.props.width, this.props.height);
		}
	};
}

export class Invaders {
	private invadersCount = 55;
	invader1 = new Image();
	invader2_3 = new Image();
	invader3_4 = new Image();
	animationSpeed = 70;
	alive: Invader[] = [];
	speed = 5;

	constructor() {
		// Load the invader sprite images
		this.invader1.src = invader1;
		this.invader2_3.src = invader2_3;
		this.invader3_4.src = invader3_4;
	}

	createInvaders = () => {
		const invaderWidth = 32;
		const invaderHeight = 24;
		const invaderPadding = 20;
		const invaderOffsetTop = 30;
		const invaderOffsetLeft = 30;

		const invaders: Invader[] = [];

		for (let i = 0; i < this.invadersCount; i++) {
			const invaderX = (i % 11) * (invaderWidth + invaderPadding - 5) + invaderOffsetLeft; // Calculate the X position of the invader
			const invaderY = Math.floor(i / 11) * (invaderHeight + invaderPadding) + invaderOffsetTop; // Calculate the Y position of the invader

			if (i < 11) {
				// first row from top
				const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: this.speed, image: this.invader1, animationSpeed: this.animationSpeed });
				invaders.push(invader);
			}

			if (i < 33 && i >= 11) {
				// second and thrird row from top
				const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: this.speed, image: this.invader2_3, animationSpeed: this.animationSpeed });
				invaders.push(invader);
			}

			if (i < 55 && i >= 33) {
				// fourth and fifth row from top
				const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: this.speed, image: this.invader3_4, animationSpeed: this.animationSpeed });
				invaders.push(invader);
			}
		}

		this.alive = invaders;
	};

	updateInvaders = () => {
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
	};

	destroy = () => {
		this.invadersCount = 0;
	};
}
