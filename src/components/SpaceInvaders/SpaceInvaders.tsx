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
		// Draw the game object using canvas API
	}

	drawInactive(context: CanvasRenderingContext2D) {
		// Draw the game object using canvas API
	}

	update() {
		// Update the game object's state
	}
}

class Laser extends GameObject {
	drawActive(context: CanvasRenderingContext2D) {
		context.fillStyle = "white";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	drawInactive(context: CanvasRenderingContext2D) {
		context.fillStyle = "black";
		context.fillRect(this.x, this.y, this.width, this.height);
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

class Invader extends GameObject {
	drawActive(context: CanvasRenderingContext2D) {
		context.fillStyle = "white";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	drawInactive(context: CanvasRenderingContext2D) {
		context.fillStyle = "black";
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const laserRef = useRef<Laser>();
	const invaderRef = useRef<Invader>();

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		const handleKeyDown = (event: KeyboardEvent) => {
			if (context) {
				if (event.key === "ArrowLeft") laserRef.current?.moveLeft(context);
				else if (event.key === "ArrowRight") laserRef.current?.moveRight(canvas?.width || 0, context);
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

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [laserRef]);

	return <canvas ref={canvasRef} width={600} height={600}></canvas>;
};

export default GameBoard;
