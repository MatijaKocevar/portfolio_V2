import { useRef, useEffect, useState, useCallback } from "react";
import { Invader, Invaders, Laser, Projectile } from "./components/GameObject";

export type IDirection = "left" | "right";

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvas = canvasRef.current;
	const context = canvas?.getContext("2d");
	const laserRef = useRef<Laser>();
	const invadersRef = useRef<Invader[]>();
	const directionRef = useRef<IDirection>("left");
	const [projectiles, setProjectilies] = useState<Projectile[]>([]);

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
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

						// laserRef.current?.drawActive(context, "white");
						// invadersRef.current?.forEach((e) => e.drawActive(context, "white"));
					}
				}
			}
		},
		[context, canvas, projectiles, laserRef]
	);

	useEffect(() => {
		if (canvas && context && !projectiles.length && !laserRef.current && !invadersRef.current) {
			// Draw the game board using the canvas API
			context.fillStyle = "black";
			context.fillRect(0, 0, canvas.width, canvas.height);

			laserRef.current = new Laser(canvas.width / 2, canvas.height - 50, 10, 20);
			laserRef.current.drawActive(context, "white");

			invadersRef.current = new Invaders(50).createInvaders();
			invadersRef.current.forEach((e) => e.drawActive(context, "white"));
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [canvas, context, handleKeyDown, projectiles]);

	/**
	 * gameboard time interval
	 */
	useEffect(() => {
		const interval = setInterval(() => {
			if (context) {
				context.fillStyle = "black";
				context.fillRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
			}
		}, 500);

		return () => clearInterval(interval);
	}, [context, canvas]);

	/**
	 * Projectile time interval
	 */
	useEffect(() => {
		const interval = setInterval(() => {
			if (context && projectiles.length && canvas) {
				//
				projectiles.forEach((projectile) => projectile.move(context, projectiles, setProjectilies));
			}
		}, 500);

		return () => clearInterval(interval);
	}, [context, projectiles, canvas]);

	/**
	 * Laser time interval
	 */
	useEffect(() => {
		const interval = setInterval(() => {
			if (invadersRef.current && canvas && context) {
				laserRef.current?.drawActive(context, "white");
			}
		}, 500);

		return () => clearInterval(interval);
	}, [canvas, context]);

	/**
	 * Invaders time interval
	 */
	useEffect(() => {
		const interval = setInterval(() => {
			if (invadersRef.current && canvas && context) {
				invadersRef.current?.forEach((e) => e.drawActive(context, "white"));
				invadersRef.current?.forEach((e) => e.updateInvader(canvas?.width ?? 0, directionRef));
			}
		}, 500);

		return () => clearInterval(interval);
	}, [canvas, context]);

	return <canvas ref={canvasRef} width={500} height={450}></canvas>;
};

export default GameBoard;
