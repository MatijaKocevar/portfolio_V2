import { useRef, useEffect } from "react";

class GameObject {
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

	drawActive(context: CanvasRenderingContext2D) {
		context.fillStyle = "white";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	drawInactive(context: CanvasRenderingContext2D) {
		context.fillStyle = "black";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	update() {
		// Update the game object's state
	}
}

class Laser extends GameObject {
	fire() {
		const projectile = new Projectile(
			this.x + this.width / 2 - 2.5, // Set the projectile's x position to the center of the laser
			this.y,
			5, // Set the projectile's width and height
			10,
			10 // Set the projectile's speed
		);

		return projectile;
	}

	move(dx: number, dy: number) {
		this.x += dx;
		this.y += dy;
	}

	moveLeft(context: CanvasRenderingContext2D) {
		if (this.x > 0) {
			this.drawInactive(context);
			this.x -= 10;
			this.drawActive(context);
		}
	}

	moveRight(canvasWidth: number, context: CanvasRenderingContext2D) {
		if (this.x + this.width < canvasWidth) {
			this.drawInactive(context);
			this.x += 10;
			this.drawActive(context);
		}
	}
}

class Projectile extends GameObject {
	speed: number;

	constructor(x: number, y: number, width: number, height: number, speed: number) {
		super(x, y, width, height);
		this.speed = speed;
	}

	move() {
		this.y -= this.speed;
	}
}

class Invader extends GameObject {
	moveLeft(context: CanvasRenderingContext2D) {
		if (this.x > 0) {
			this.drawInactive(context);
			this.x -= 10;
			this.drawActive(context);
		}
	}

	moveRight(canvasWidth: number, context: CanvasRenderingContext2D) {
		if (this.x + this.width < canvasWidth) {
			this.drawInactive(context);
			this.x += 10;
			this.drawActive(context);
		}
	}
}

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const laserRef = useRef<Laser>();
	const invaderRef = useRef<Invader>();
	const projectiles: Projectile[] = [];

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		const handleKeyDown = (event: KeyboardEvent) => {
			event.preventDefault();

			if (context) {
				if (event.key === "ArrowLeft") laserRef.current?.moveLeft(context);
				else if (event.key === "ArrowRight") laserRef.current?.moveRight(canvas?.width || 0, context);
				else if (event.key === " ") {
					// Listen for the spacebar key
					const projectile = laserRef.current?.fire();
					if (projectile) {
						projectiles.push(projectile);
					}
				}
			}
		};

		if (canvas && context) {
			// Draw the game board using the canvas API
			context.fillStyle = "black";
			context.fillRect(0, 0, canvas.width, canvas.height);

			laserRef.current = new Laser(canvas.width / 2, canvas.height - 50, 10, 20);
			laserRef.current.drawActive(context);

			invaderRef.current = new Invader(canvas.width / 2, 0, 10, 20);
			invaderRef.current.drawActive(context);
		}

		window.addEventListener("keydown", handleKeyDown);

		let test = 1;

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return <canvas ref={canvasRef} width={500} height={450}></canvas>;
};

export default GameBoard;
