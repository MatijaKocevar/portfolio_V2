import { IDirection } from "../SpaceInvaders";

export class GameObject {
	x: number;
	y: number;
	width: number;
	height: number;

	constructor(x: number, y: number, width: number, height: number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	drawActive(context: CanvasRenderingContext2D, color: string) {
		context.fillStyle = color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	drawInactive(context: CanvasRenderingContext2D) {
		context.fillStyle = "black";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	update(context: CanvasRenderingContext2D, position: { x?: number; y?: number }, color?: string) {
		this.drawInactive(context);
		if (position.x) this.x = position.x;
		if (position.y) this.y = position.y;
		this.drawActive(context, color ?? "white");
	}
}

export class Laser extends GameObject {
	fire() {
		const projectile = new Projectile(
			this.x + this.width / 2 - 2.5, // Set the projectile's x position to the center of the laser
			this.y,
			5,
			10,
			20
		);

		return projectile;
	}

	moveLeft(context: CanvasRenderingContext2D) {
		if (this.x > 0) {
			this.update(context, { x: this.x - 10 });
		}
	}

	moveRight(canvasWidth: number, context: CanvasRenderingContext2D) {
		if (this.x + this.width < canvasWidth) {
			this.update(context, { x: this.x + 10 });
		}
	}
}

export class Projectile extends GameObject {
	speed: number;

	constructor(x: number, y: number, width: number, height: number, speed: number) {
		super(x, y, width, height);
		this.speed = speed;
	}

	move(context: CanvasRenderingContext2D, projectiles: Projectile[], setProjectilies: React.Dispatch<React.SetStateAction<Projectile[]>>) {
		if (this.y <= 10)
			if (projectiles) {
				const newProjectiles = projectiles.slice(1);
				if (newProjectiles) setProjectilies(newProjectiles);
			}
		this.update(context, { y: this.y - this.speed }, "red");
	}
}

export class Invader extends GameObject {
	moveLeft() {
		if (this.x > 0) {
			this.x -= 10;
		}
	}

	moveRight(canvasWidth: number) {
		if (this.x + this.width < canvasWidth) {
			this.x += 10;
		}
	}

	updateInvader(canvasWidth: number, direction: React.MutableRefObject<IDirection>) {
		// Check if the invader has hit the left or right wall
		if (this.x <= 0) {
			this.moveRight(canvasWidth);
			direction.current = "right";
		} else if (this.x + this.width >= canvasWidth) {
			this.moveLeft();
			direction.current = "left";
		} else {
			// If the invader is not at the edge of the canvas, continue moving in the current direction
			if (direction.current === "left") {
				this.moveLeft();
			} else {
				this.moveRight(canvasWidth);
			}
		}
	}
}

export class Invaders {
	private invadersCount = 0;

	constructor(invadersCount: number) {
		this.invadersCount = invadersCount;
	}

	createInvaders() {
		const invaderWidth = 10;
		const invaderHeight = 20;
		const invaderPadding = 10;
		const invaderOffsetTop = 30;
		const invaderOffsetLeft = 30;

		const invaders: Invader[] = [];

		for (let i = 0; i < this.invadersCount; i++) {
			const invaderX = (i % 10) * (invaderWidth + invaderPadding) + invaderOffsetLeft;
			const invaderY = Math.floor(i / 10) * (invaderHeight + invaderPadding) + invaderOffsetTop;
			const invader = new Invader(invaderX, invaderY, invaderWidth, invaderHeight);
			invaders.push(invader);
		}

		return invaders;
	}
}
