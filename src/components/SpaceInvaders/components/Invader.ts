import invader1 from "../sprites/invader1.png";
import invader2_3 from "../sprites/invader2-3.png";
import invader3_4 from "../sprites/invader3-4.png";
interface IInvader {
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
	image: HTMLImageElement;
}

let counter = 0;

export class Invader {
	props: IInvader;
	id: number;
	spriteWidth: number;
	spriteHeight: number;
	frame = 0;

	constructor({ x, y, width, height, speed, image }: IInvader) {
		this.props = { x, y, width, height, speed, image };
		this.id = counter;
		this.spriteWidth = 57;
		this.spriteHeight = 38;
		counter++;
	}

	moveLeft = () => (this.props.x -= this.props.speed);

	moveRight = () => (this.props.x += this.props.speed);

	updateInvader = (direction: "left" | "right", gameFrame: number) => {
		// If the invader is not at the edge of the canvas, continue moving in the current direction
		if (direction === "left") this.moveLeft();

		if (direction === "right") this.moveRight();

		if (gameFrame % 30 === 0) this.frame > 0 ? (this.frame = 0) : this.frame++;
	};

	draw = (context: CanvasRenderingContext2D) => {
		// context.fillStyle = "blue";
		// context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);

		if (this.props.image) context.drawImage(this.props.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.props.x, this.props.y, this.props.width, this.props.height);
	};
}

export class Invaders {
	private invadersCount = 55;
	invader1 = new Image();
	invader2_3 = new Image();
	invader3_4 = new Image();

	constructor() {
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
			const invaderX = (i % 11) * (invaderWidth + invaderPadding - 5) + invaderOffsetLeft;
			const invaderY = Math.floor(i / 11) * (invaderHeight + invaderPadding) + invaderOffsetTop;

			if (i < 11) {
				const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: 0.5, image: this.invader1 });
				invaders.push(invader);
			}

			if (i < 33 && i >= 11) {
				const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: 0.5, image: this.invader2_3 });
				invaders.push(invader);
			}

			if (i < 55 && i >= 33) {
				const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: 0.5, image: this.invader3_4 });
				invaders.push(invader);
			}
		}

		return invaders;
	};

	destroy = () => {
		this.invadersCount = 0;
	};
}
