interface IInvader {
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
	getDirection: () => "left" | "right";
	setDirection: (direction: "left" | "right") => void;
}

let counter = 0;

export class Invader {
	props: IInvader;
	// color: string;
	id: number;

	constructor({ x, y, width, height, speed, getDirection, setDirection }: IInvader) {
		this.props = { x, y, width, height, speed, getDirection, setDirection };
		// this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
		this.id = counter;
		counter++;
	}

	moveLeft = () => {
		if (this.props.x >= 5) {
			this.props.x -= this.props.speed;
		}
	};

	moveRight = (canvasWidth: number) => {
		if (this.props.x + this.props.width + 5 <= canvasWidth) {
			this.props.x += this.props.speed;
		}
	};

	updateInvader = (canvasWidth: number) => {
		// Check if the invader has hit the left or right wall
		if (this.props.x <= 5) {
			this.props.setDirection("right");
			this.moveRight(canvasWidth);
			return;
			// this.moveRight(canvasWidth);
		} else if (this.props.x + this.props.width + 5 >= canvasWidth) {
			this.props.setDirection("left");
			this.moveLeft();
			return;
			// this.moveLeft();
		}
		// If the invader is not at the edge of the canvas, continue moving in the current direction
		if (this.props.getDirection() === "left") {
			this.moveLeft();
		} else {
			this.moveRight(canvasWidth);
		}
	};

	draw = (context: CanvasRenderingContext2D) => {
		// context.fillStyle = "blue";
		// context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);

		const image = document.getElementById("invaderImage") as HTMLImageElement;
		if (image) context.drawImage(image, this.props.x, this.props.y, this.props.width, this.props.height);
	};
}

export class Invaders {
	private invadersCount: number;
	direction: "left" | "right";

	constructor(invadersCount: number) {
		this.invadersCount = invadersCount;
		this.direction = "left";
	}

	createInvaders = () => {
		const invaderWidth = 25;
		const invaderHeight = 25;
		const invaderPadding = 10;
		const invaderOffsetTop = 30;
		const invaderOffsetLeft = 30;

		const invaders: Invader[] = [];

		for (let i = 0; i < this.invadersCount; i++) {
			const invaderX = (i % 21) * (invaderWidth + invaderPadding) + invaderOffsetLeft;
			const invaderY = Math.floor(i / 21) * (invaderHeight + invaderPadding) + invaderOffsetTop;
			const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: 0.5, getDirection: this.getDirection, setDirection: this.setDirection });
			invaders.push(invader);
		}

		return invaders;
	};

	getDirection = () => {
		return this.direction;
	};

	setDirection = (direction: "left" | "right") => {
		this.direction = direction;
	};

	destroy = () => {
		this.invadersCount = 0;
	};
}
