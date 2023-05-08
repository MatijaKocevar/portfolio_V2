import { useRef, useEffect, useState } from "react";

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

	update(context: CanvasRenderingContext2D, position: { x?: number; y?: number }) {
		this.drawInactive(context);
		if (position.x) this.x = position.x;
		if (position.y) this.y = position.y;
		this.drawActive(context);
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

class Projectile extends GameObject {
	speed: number;

	constructor(x: number, y: number, width: number, height: number, speed: number) {
		super(x, y, width, height);
		this.speed = speed;
	}

	move(context: CanvasRenderingContext2D, projectiles: Projectile[], setProjectilies: React.Dispatch<React.SetStateAction<Projectile[]>>) {
		this.update(context, { y: this.y - this.speed });

		if (this.y <= 10)
			if (projectiles) {
				const newProjectiles = projectiles.slice(1);
				if (newProjectiles) setProjectilies(newProjectiles);
			}
	}
}

class Invader extends GameObject {
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

	update() {}
}

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvas = canvasRef.current;
	const context = canvas?.getContext("2d");
	const laserRef = useRef<Laser>();
	const invaderRef = useRef<Invader>();
	const [projectiles, setProjectilies] = useState<Projectile[]>([]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (context) {
				if (event.key === "ArrowLeft") laserRef.current?.moveLeft(context);
				else if (event.key === "ArrowRight") laserRef.current?.moveRight(canvas?.width || 0, context);
				else if (event.key === " ") {
					event.preventDefault();
					// Listen for the spacebar key
					const projectile = laserRef.current?.fire();
					if (projectile) {
						setProjectilies([...projectiles, projectile]);

						projectile.move(context, projectiles, setProjectilies);

						laserRef.current?.drawActive(context);
						invaderRef.current?.drawActive(context);
					}
				}
			}
		};

		if (canvas && context && !projectiles.length && !laserRef.current && !invaderRef.current) {
			// Draw the game board using the canvas API
			context.fillStyle = "black";
			context.fillRect(0, 0, canvas.width, canvas.height);

			laserRef.current = new Laser(canvas.width / 2, canvas.height - 50, 10, 20);
			laserRef.current.drawActive(context);

			invaderRef.current = new Invader(canvas.width / 2, 0, 10, 20);
			invaderRef.current.drawActive(context);
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [canvas, context, projectiles]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (context) {
				context.fillStyle = "black";
				context.fillRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
				projectiles.forEach((projectile) => projectile.move(context, projectiles, setProjectilies));
				laserRef.current?.drawActive(context);
				invaderRef.current?.drawActive(context);
			}
		}, 100);

		return () => clearInterval(interval);
	}, [projectiles, context, canvas]);

	return <canvas ref={canvasRef} width={500} height={450}></canvas>;
};

export default GameBoard;
