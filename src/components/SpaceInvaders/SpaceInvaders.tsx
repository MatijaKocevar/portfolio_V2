import { useRef, useEffect, useState, useCallback } from "react";
import { Game } from "./components/Game";
import "./SpaceInvaders.scss";

export type IDirection = "left" | "right";

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const gameRef = useRef<Game | null>(null);
	const gameFrame = useRef(0);
	const [gameOver, setGameOver] = useState(false);
	const leftRef = useRef<HTMLButtonElement>(null);
	const fireRef = useRef<HTMLButtonElement>(null);
	const rightRef = useRef<HTMLButtonElement>(null);
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 576); // State for mobile device detection

	// Callback function for handling window resize
	const handleResize = useCallback(() => {
		setIsMobile(window.innerWidth < 576);
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
			// Create a new instance of the Game class with necessary parameters
			gameRef.current = new Game({
				height: canvas.height,
				width: canvas.width,
				mobileControls: [leftRef, fireRef, rightRef],
				setGameOver,
			});

			// Function to animate the game
			const animate = () => {
				context.clearRect(0, 0, canvas.width, canvas.height);
				gameRef.current?.update(gameFrame.current);
				gameRef.current?.draw(context);
				gameFrame.current++;

				// Check if all invaders are destroyed or if any invader has reached the bottom of the canvas
				if (gameRef.current?.invaders.alive.length === 0 || gameRef.current?.invaders.alive.some((invader) => invader.props.y > 450)) {
					setGameOver(true);
				}

				if (!gameOver) {
					animationFrame = requestAnimationFrame(animate); // Continue the animation loop
				} else {
					// Display game over text on the canvas
					context.fillStyle = "rgba(0, 0, 0, 0.7)";
					context.fillRect(0, 0, canvas.width, canvas.height);

					context.fillStyle = "white";
					context.font = "48px Arial";
					context.textAlign = "center";
					context.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);

					context.fillStyle = "white";
					context.font = "24px Arial";
					context.textAlign = "center";
					context.fillText("Click anywhere to reset", canvas.width / 2, canvas.height / 2 + 50);
				}
			};

			animate(); // Start the animation loop
		}

		return () => {
			gameRef.current?.destroy();
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [gameOver]);

	// Callback function for handling game reset
	const handleReset = useCallback(() => {
		if (gameOver) {
			setGameOver(false);
			const canvas = canvasRef.current;
			const context = canvas?.getContext("2d");

			if (canvas && context) {
				gameRef.current = new Game({
					height: canvas.height,
					width: canvas.width,
					mobileControls: [leftRef, fireRef, rightRef],
					setGameOver,
				});
			}
		}
	}, [gameOver]);

	return (
		<>
			<canvas ref={canvasRef} width={600} height={510} onClick={handleReset} /> {/* Canvas element */}
			{isMobile && (
				<div className='mobile-controls'>
					{" "}
					{/* Mobile controls */}
					<button ref={leftRef} className='left'>
						&larr;
					</button>
					<button ref={fireRef} className='fire'>
						fire
					</button>
					<button ref={rightRef} className='right'>
						&rarr;
					</button>
				</div>
			)}
		</>
	);
};

export default GameBoard;
