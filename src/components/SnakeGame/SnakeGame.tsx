import React, { useState, useEffect, useRef } from "react";
import "./SnakeGame.scss";

type Position = {
	x: number;
	y: number;
};

type Direction = "up" | "down" | "left" | "right";

type Snake = {
	body: Position[];
	direction: Direction;
};

type Food = {
	position: Position;
};

const SnakeGame: React.FC = () => {
	const [snake, setSnake] = useState<Snake>({
		body: [{ x: 10, y: 10 }],
		direction: "right",
	});
	const [food, setFood] = useState<Food>({
		position: { x: 5, y: 5 },
	});
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [playPause, setPlayPause] = useState<boolean>(false);
	const isEating = useRef<boolean>(false);
	const previousFood = useRef<Position>({ x: 0, y: 0 });

	const handleKeyPress = (event: KeyboardEvent) => {
		event.preventDefault();

		switch (event.key) {
			case "ArrowUp":
				setSnake((prevSnake) => ({ ...prevSnake, direction: "up" }));
				break;
			case "ArrowDown":
				setSnake((prevSnake) => ({ ...prevSnake, direction: "down" }));
				break;
			case "ArrowLeft":
				setSnake((prevSnake) => ({ ...prevSnake, direction: "left" }));
				break;
			case "ArrowRight":
				setSnake((prevSnake) => ({ ...prevSnake, direction: "right" }));
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);
		return () => document.removeEventListener("keydown", handleKeyPress);
	}, []);

	const updateSnakePosition = () => {
		setSnake((prevSnake) => {
			const newHeadPosition = getNewHeadPosition(prevSnake.direction);
			const newBody = [newHeadPosition, ...prevSnake.body.slice(0, -1)];
			return { ...prevSnake, body: newBody };
		});
	};

	const getNewHeadPosition = (direction: Direction): Position => {
		const currentHead = snake.body[0];
		switch (direction) {
			case "up":
				return { x: currentHead.x, y: currentHead.y - 1 };
			case "down":
				return { x: currentHead.x, y: currentHead.y + 1 };
			case "left":
				return { x: currentHead.x - 1, y: currentHead.y };
			case "right":
				return { x: currentHead.x + 1, y: currentHead.y };
			default:
				return currentHead;
		}
	};

	const updateFoodPosition = () => {
		let newFoodPosition = getRandomPosition();
		while (isFoodInsideSnake(newFoodPosition)) {
			newFoodPosition = getRandomPosition();
		}
		setFood({ position: newFoodPosition });
	};

	const getRandomPosition = (): Position => {
		const x = Math.floor(Math.random() * 20);
		const y = Math.floor(Math.random() * 20);
		return { x, y };
	};

	const isFoodInsideSnake = (foodPosition: Position) => {
		const { body } = snake;
		for (let i = 0; i < body.length; i++) {
			if (body[i].x === foodPosition.x && body[i].y === foodPosition.y) {
				return true;
			}
		}
		return false;
	};

	const checkCollisions = () => {
		const head = snake.body[0];

		// Check for collision with game board walls
		if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
			setGameOver(true);
			return;
		}

		// Check for collision with snake body
		for (let i = 1; i < snake.body.length; i++) {
			if (head.x === snake.body[i].x && head.y === snake.body[i].y) {
				setGameOver(true);
				return;
			}
		}

		// Check for collision with food
		if (head.x === food.position.x && head.y === food.position.y) {
			isEating.current = true;

			previousFood.current = food.position;
			updateFoodPosition();
		}

		if (isEating.current) {
			const bodyLength = snake.body.length;
			const previusFoodPos = previousFood.current;
			if (snake.body[bodyLength - 1].x == previusFoodPos.x && snake.body[bodyLength - 1].y == previusFoodPos.y) {
				setSnake((prevSnake) => {
					const newBody = [...prevSnake.body, previusFoodPos];

					return {
						direction: snake.direction,
						body: newBody,
					};
				});

				isEating.current = false;
			}
		}
	};

	useEffect(() => {
		let intervalId = 0;

		if (playPause) {
			intervalId = setInterval(() => {
				if (gameOver) return;
				updateSnakePosition();
				checkCollisions();
			}, 200);
		}

		return () => clearInterval(intervalId);
	}, [snake, playPause]);

	return (
		<div className='snake-game'>
			<div className='game-board'>
				{snake.body.map((position, index) => (
					<div key={index} className={`snake ${index === 0 ? "head" : ""}`} style={{ left: position.x * 20, top: position.y * 20 }} />
				))}
				<div className='food' style={{ left: food.position.x * 20, top: food.position.y * 20 }} />
				{gameOver && (
					<div className='game-over'>
						<p>Game Over</p>
					</div>
				)}
			</div>
			<button onClick={() => setPlayPause(!playPause)}>Play/Pause</button>
		</div>
	);
};

export default SnakeGame;
