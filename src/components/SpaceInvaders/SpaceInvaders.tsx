import { useRef, useEffect } from "react";
import { Game } from "./components/Game";
import "./SpaceInvaders.scss";
import player from "./sprites/player.png";
import invader2 from "./sprites/invader2.png";

export type IDirection = "left" | "right";

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const gameRef = useRef<Game>();

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
					gameRef.current?.update();
					gameRef.current?.draw(context);
				}
				animationFrame = requestAnimationFrame(animate);
			};

			//loops the animation. 60fps
			animate();
		}

		return () => {
			gameRef.current?.destroy();
			if (animationFrame) cancelAnimationFrame(animationFrame);
		};
	}, []);

	return (
		<>
			{/* <button onClick={onClick} style={{ height: "3rem" }}></button> */}
			<canvas ref={canvasRef} width={800} height={535}></canvas>
		</>
	);
};

export default GameBoard;
