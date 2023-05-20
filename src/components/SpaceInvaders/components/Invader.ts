import invader2 from "../sprites/invader2.png";
interface IInvader {
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
}

let counter = 0;

export class Invader {
	props: IInvader;
	id: number;
	image: HTMLImageElement;

	constructor({ x, y, width, height, speed }: IInvader) {
		this.props = { x, y, width, height, speed };
		this.image = new Image();
		this.image.src = invader2;
		this.id = counter;
		counter++;
	}

	moveLeft = () => (this.props.x -= this.props.speed);

	moveRight = () => (this.props.x += this.props.speed);

	updateInvader = (direction: "left" | "right") => {
		// If the invader is not at the edge of the canvas, continue moving in the current direction
		if (direction === "left") this.moveLeft();

		if (direction === "right") this.moveRight();
	};

	draw = (context: CanvasRenderingContext2D) => {
		// context.fillStyle = "blue";
		// context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);

		if (this.image) context.drawImage(this.image, this.props.x, this.props.y, this.props.width, this.props.height);
	};
}

export class Invaders {
	private invadersCount: number;

	constructor(invadersCount: number) {
		this.invadersCount = invadersCount;
	}

	createInvaders = () => {
		const invaderWidth = 25;
		const invaderHeight = 19;
		const invaderPadding = 10;
		const invaderOffsetTop = 30;
		const invaderOffsetLeft = 30;

		const invaders: Invader[] = [];

		for (let i = 0; i < this.invadersCount; i++) {
			const invaderX = (i % 21) * (invaderWidth + invaderPadding) + invaderOffsetLeft;
			const invaderY = Math.floor(i / 21) * (invaderHeight + invaderPadding) + invaderOffsetTop;
			const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: 0.5 });
			invaders.push(invader);
		}

		return invaders;
	};

	destroy = () => {
		this.invadersCount = 0;
	};
}
