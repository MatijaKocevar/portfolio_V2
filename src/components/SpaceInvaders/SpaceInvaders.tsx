import { useRef, useEffect, useState, useCallback } from "react";
import { Game } from "./components/Game";
import "./SpaceInvaders.scss";
import ToggleSwitch from "../Shared/ToogleSwitch/ToggleSwitch";

export type IDirection = "left" | "right";
let animationFrame: number;

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

	const animate = useCallback(() => {
		gameRef.current?.update();
		gameRef.current?.draw();

		if (!gameRef.current?.gameOver) animationFrame = requestAnimationFrame(animate);
		else gameRef.current?.drawGameOver();
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

		if (canvas && context) {
			gameRef.current = new Game({
				height: canvas.height,
				width: canvas.width,
				mobileControls: [leftRef, fireRef, rightRef],
				context,
			});

			animate();
		}

		return () => {
			gameRef.current?.destroy();
			gameRef.current = null;
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [animate]);

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

			animate();
		}
	}, [animate]);

	// const onConsoleLogShields = () => {
	// 	console.log(gameRef.current?.shields);
	// };

	const onSoundChange = (option: string) => {
		if (gameRef.current) {
			if (option === "on") gameRef.current.playSound = true;

			if (option === "off") gameRef.current.playSound = false;
		}
	};

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
			<div className='sound-wrapper'>
				<div>Sounds:</div>
				<ToggleSwitch title='Sound On/Off' onChange={onSoundChange} first='off' second='on' />
			</div>
		</>
	);
};

export default GameBoard;
