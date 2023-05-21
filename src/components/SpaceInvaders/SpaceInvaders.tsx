import { useRef, useEffect, useState } from "react";
import { Game } from "./components/Game";
import "./SpaceInvaders.scss";

export type IDirection = "left" | "right";

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const gameRef = useRef<Game>();
	const gameFrame = useRef<number>(0);
	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		let animationFrame: number;

		if (canvas && context) {
			gameRef.current = new Game({ height: canvas?.height ?? 0, width: canvas?.width ?? 0 });

			//draws the game
			const animate = () => {
				if (context && gameRef.current && canvas) {
					context.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
					gameRef.current?.update(gameFrame.current);
					gameRef.current?.draw(context);
				}
				gameFrame.current++;

				if (gameRef.current?.invadersArray.length === 0) {
					setGameOver(true);
				}
				if (!gameOver) animationFrame = requestAnimationFrame(animate);
			};

			//loops the animation. 60fps
			animate();
		}

		return () => {
			gameRef.current?.destroy();
			if (animationFrame) cancelAnimationFrame(animationFrame);
		};
	}, [gameOver]);

	return (
		<>
			{/* <button onClick={onClick} style={{ height: "3rem" }}></button> */}
			<canvas ref={canvasRef} width={600} height={600}></canvas>
		</>
	);
};

export default GameBoard;
