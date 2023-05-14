interface IInvader {
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
	getDirection: () => "left" | "right";
	setDirection: (direction: "left" | "right") => void;
}

export class Invader {
	props: IInvader;

	constructor({ x, y, width, height, speed, getDirection, setDirection }: IInvader) {
		this.props = { x, y, width, height, speed, getDirection, setDirection };
	}

	moveLeft = () => {
		if (this.props.x > 0) {
			this.props.x -= this.props.speed;
		}
	};

	moveRight = (canvasWidth: number) => {
		if (this.props.x + this.props.width < canvasWidth) {
			this.props.x += this.props.speed;
		}
	};

	updateInvader = (canvasWidth: number) => {
		// Check if the invader has hit the left or right wall
		if (this.props.x <= 0) {
			this.props.setDirection("right");
			this.moveRight(canvasWidth);
		} else if (this.props.x + this.props.width >= canvasWidth) {
			this.props.setDirection("left");
			this.moveLeft();
		} else {
			// If the invader is not at the edge of the canvas, continue moving in the current direction
			if (this.props.getDirection() === "left") {
				this.moveLeft();
			} else {
				this.moveRight(canvasWidth);
			}
		}
	};

	draw = (context: CanvasRenderingContext2D) => {
		context.fillStyle = "white";
		context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
	};
}

export class Invaders {
	private invadersCount = 0;
	direction: "left" | "right";

	constructor(invadersCount: number) {
		this.invadersCount = invadersCount;
		this.direction = "left";
	}

	createInvaders = () => {
		const invaderWidth = 10;
		const invaderHeight = 20;
		const invaderPadding = 10;
		const invaderOffsetTop = 30;
		const invaderOffsetLeft = 30;

		const invaders: Invader[] = [];

		for (let i = 0; i < this.invadersCount; i++) {
			const invaderX = (i % 20) * (invaderWidth + invaderPadding) + invaderOffsetLeft;
			const invaderY = Math.floor(i / 20) * (invaderHeight + invaderPadding) + invaderOffsetTop;
			const invader = new Invader({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, speed: 1, getDirection: this.getDirection, setDirection: this.setDirection });
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
}
