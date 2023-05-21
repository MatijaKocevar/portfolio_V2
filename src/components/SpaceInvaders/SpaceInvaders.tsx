import { useRef, useEffect, useState } from "react";
import { Game } from "./components/Game";
import "./SpaceInvaders.scss";

export type IDirection = "left" | "right";

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const gameRef = useRef<Game>();
	const gameFrame = useRef<number>(0);
	const [gameOver, setGameOver] = useState(false);
	const left = useRef<HTMLButtonElement>(null);
	const fire = useRef<HTMLButtonElement>(null);
	const right = useRef<HTMLButtonElement>(null);
	const [isMobile, setIsmobile] = useState<boolean>(window.innerWidth < 576);

	addEventListener("resize", () => {
		setIsmobile(window.innerWidth < 576);
	});

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		let animationFrame: number;
		const mobileControls = [left, fire, right];

		if (canvas && context) {
			gameRef.current = new Game({ height: canvas?.height ?? 0, width: canvas?.width ?? 0, mobileControls });

			//draws the game
			const animate = () => {
				if (context && gameRef.current && canvas) {
					context.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
					gameRef.current?.update(gameFrame.current);
					gameRef.current?.draw(context);
				}
				gameFrame.current++;

				if (gameRef.current?.invadersArray.length === 0) setGameOver(true);

				if (gameRef.current?.invadersArray.some((invader) => invader.props.y > 450)) setGameOver(true);

				if (!gameOver) animationFrame = requestAnimationFrame(animate);
			};

			//loops the animation. 60fps
			if (!gameOver) animate();
		}

		return () => {
			gameRef.current?.destroy();
			if (animationFrame) cancelAnimationFrame(animationFrame);
		};
	}, [gameOver]);

	return (
		<>
			<canvas ref={canvasRef} width={600} height={510}></canvas>
			{isMobile && (
				<div className='mobile-controls'>
					<button id='left' ref={left} className='left'>
						&larr;
					</button>
					<button id='fire' ref={fire} className='fire'>
						fire
					</button>
					<button id='right' ref={right} className='right'>
						&rarr;
					</button>
				</div>
			)}
		</>
	);
};

export default GameBoard;
