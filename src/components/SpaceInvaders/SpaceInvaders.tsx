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

	draw(context: CanvasRenderingContext2D) {
		// Draw the game object using canvas API
	}

	update() {
		// Update the game object's state
	}
}

class Laser extends GameObject {
	move(dx: number) {
		this.x += dx;
	}

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = "white";
		context.fillRect(this.x, this.y, this.width, this.height);
	}

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
}

class Invader extends GameObject {
	move(dx: number, dy: number) {
		this.x += dx;
		this.y += dy;
	}

	drop() {
		this.y += this.height;
	}

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = "white";
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
			if (event.key === "ArrowLeft") {
				laserRef.current?.moveLeft();
				if (context) laserRef.current?.draw(context);
			} else if (event.key === "ArrowRight") {
				laserRef.current?.moveRight(canvasRef.current?.width || 0);
				if (context) laserRef.current?.draw(context);
			}
		};
		if (canvas && context) {
			// Draw the game board using the canvas API
			context.fillStyle = "black";
			context.fillRect(0, 0, canvas.width, canvas.height);

			laserRef.current = new Laser(canvas.width / 2, canvas.height - 50, 10, 20);
			laserRef.current.draw(context);

			invaderRef.current = new Invader(canvas.width / 2, 0, 10, 20);
			invaderRef.current.draw(context);
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [laserRef]);

	return <canvas ref={canvasRef} width={400} height={300}></canvas>;
};

export default GameBoard;
