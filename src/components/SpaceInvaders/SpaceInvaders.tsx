import { useRef, useEffect, useState, useCallback } from "react";
import { Game } from "./components/Game";
import "./SpaceInvaders.scss";
import ToggleSwitch from "../Shared/ToogleSwitch/ToggleSwitch";
import PopupBox from "../Shared/PopupBox/PopupBox";

export type IDirection = "left" | "right";
let animationFrame: number;

interface Highscore {
	id: number;
	playerName: string;
	scoreValue: number;
}

const GameBoard = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const gameRef = useRef<Game | null>(null);
	const leftRef = useRef<HTMLButtonElement>(null);
	const fireRef = useRef<HTMLButtonElement>(null);
	const rightRef = useRef<HTMLButtonElement>(null);
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
	const [showPopupScore, setShowPopupScore] = useState(false);
	const [showPopupHighscores, setShowPopupHighscores] = useState(false);
	const [name, setName] = useState("");
	const [highscores, setHighscores] = useState<Highscore[]>([]);

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
				setShowPopupScore,
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

	const handleReset = () => {
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
					setShowPopupScore,
				});
			}

			animate();
		}
	};

	// const onConsoleLogShields = () => {
	// 	console.log(gameRef.current?.shields);
	// };

	const onSoundChange = (option: string) => {
		if (gameRef.current) {
			if (option === "on") gameRef.current.playSound = true;

			if (option === "off") gameRef.current.playSound = false;
		}
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const onSaveClick = () => {
		//i need to call the api here. this is the endpoint: https://localhost:8000/scores

		const data = {
			playerName: name,
			scoreValue: gameRef.current?.score,
		};

		fetch("https://matijakocevar.com/scores", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		setName("");
		handleReset();
		setShowPopupScore(false);
	};

	const getHighscores = () => {
		fetch("https://matijakocevar.com/scores")
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				setHighscores(data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	const scoreContent = (
			<div className='score-content'>
				<div className='score-input'>
					<input type='text' placeholder='Enter your name' value={name} onChange={handleNameChange} />
					<div className='score'>Score: {gameRef.current?.score}</div>
				</div>
				<div className='actions'>
					<button onClick={onSaveClick}>Save & Close</button>
				</div>
			</div>
		),
		highscoresContent = (
			<div className='highscores-content'>
				<h3>Highscores</h3>
				<table className='highscores-table'>
					<tbody>
						{highscores.map((highscore, i) => (
							<tr className='highscore' key={highscore.id}>
								<td className='player-position'>{i + 1}.</td>
								<td className='player-name'>{highscore.playerName}</td>
								<td className='score-value'>{highscore.scoreValue}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);

	return (
		<>
			<div className='score-popup-wrapper'>{showPopupScore && <PopupBox content={scoreContent} onClose={() => setShowPopupScore(false)} />}</div>

			<div className='highscore-popup-wrapper'>{showPopupHighscores && <PopupBox content={highscoresContent} onClose={() => setShowPopupHighscores(false)} />}</div>

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
			<div className='options-wrapper'>
				<div className='highscores'>
					<button
						onClick={() => {
							getHighscores();
							setShowPopupHighscores(true);
						}}
					>
						Highscores
					</button>
				</div>
				<div className='sounds'>
					<div>Sounds:</div>
					<ToggleSwitch title='Sound On/Off' onChange={onSoundChange} first='off' second='on' />
				</div>
			</div>
		</>
	);
};

export default GameBoard;
