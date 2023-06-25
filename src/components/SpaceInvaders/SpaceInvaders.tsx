import { useRef, useEffect, useState, useCallback } from "react";
import { Game } from "./components/Game";
import "./SpaceInvaders.scss";

export type IDirection = "left" | "right";

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const gameRef = useRef<Game | null>(null);
	const leftRef = useRef<HTMLButtonElement>(null);
	const fireRef = useRef<HTMLButtonElement>(null);
	const rightRef = useRef<HTMLButtonElement>(null);
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

	const handleResize = useCallback(() => {
		setIsMobile(window.innerWidth < 768);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		let animationFrame: number;

		if (canvas && context) {
			gameRef.current = new Game({
				height: canvas.height,
				width: canvas.width,
				mobileControls: [leftRef, fireRef, rightRef],
				context,
			});

			const animate = () => {
				gameRef.current?.update();
				gameRef.current?.draw();

				if (!gameRef.current?.gameOver) animationFrame = requestAnimationFrame(animate);
				else gameRef.current?.drawGameOver();
			};

			animate();
		}

		return () => {
			gameRef.current?.destroy();
			gameRef.current = null;
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, []);

	const handleReset = useCallback(() => {
		if (gameRef.current?.gameOver) {
			gameRef.current?.setGameOver(false);
			const canvas = canvasRef.current;
			const context = canvas?.getContext("2d");

			if (canvas && context) {
				gameRef.current = new Game({
					height: canvas.height,
					width: canvas.width,
					mobileControls: [leftRef, fireRef, rightRef],
					context,
				});
			}
		}
	}, []);

	// const onConsoleLogShields = () => {
	// 	console.log(gameRef.current?.shields);
	// };

	return (
		<>
			<canvas ref={canvasRef} width={600} height={600} onClick={handleReset} />
			{isMobile && (
				<div className='mobile-controls'>
					<button id='left' ref={leftRef} className='left'>
						&larr;
					</button>
					<button id='fire' ref={fireRef} className='fire'>
						fire
					</button>
					<button id='right' ref={rightRef} className='right'>
						&rarr;
					</button>
					{/* <button onClick={onConsoleLogShields}>Console log shields</button> */}
				</div>
			)}
		</>
	);
};

export default GameBoard;
