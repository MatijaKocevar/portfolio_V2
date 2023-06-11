import { Defender } from "./Defender";
import { InputHandler } from "./InputHandler";
import { Invaders } from "./Invader";
import { Projectile } from "./Projectile";

interface IGame {
	width: number;
	height: number;
	mobileControls: React.RefObject<HTMLButtonElement>[];
	setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
	setGameOverMessage: React.Dispatch<React.SetStateAction<string>>;
}

export class Game {
	props: IGame;
	defender: Defender;
	inputHandler: InputHandler;
	playerProjectiles: Projectile[] = [];
	invaderProjectiles: Projectile[] = [];
	invaders: Invaders;
	currentDirection: "left" | "right";
	invadersAnimationSpeed = 70;
	invaderSpeed = 5;

	constructor({ height, width, mobileControls, setGameOver, setGameOverMessage }: IGame) {
		this.props = { height, width, mobileControls, setGameOver, setGameOverMessage };
		this.defender = new Defender({ game: this });
		this.inputHandler = new InputHandler(mobileControls);
		this.invaders = new Invaders({ animationSpeed: this.invadersAnimationSpeed, speed: this.invaderSpeed });
		this.currentDirection = "right";

		this.invaders.createInvaders();
	}

	// Update the direction of the invaders based on their position and the game boundaries
	updateDirection = () => {
		const hitLeftWall = this.invaders.alive.some((invader) => invader.props.x <= 5);
		const hitRightWall = this.invaders.alive.some((invader) => invader.props.x + invader.props.width + 5 >= this.props.width);

		if (hitLeftWall) {
			this.currentDirection = "right";
		}

		if (hitRightWall) {
			this.currentDirection = "left";
		}
	};

	// Update the game state in each frame
	update = (gameFrame: number) => {
		if (this.invaders.alive.some((invader) => invader.props.y > 510)) {
			this.props.setGameOver(true);
		}

		// Update invaderProjectiles' positions
		this.invaderProjectiles.forEach((projectile) => projectile.update());
		// Update playerProjectiles' positions
		this.playerProjectiles.forEach((projectile) => projectile.update());
		// Update defender's position based on input
		this.defender.update(this.inputHandler.keys);

		if (this.invaders.alive && gameFrame % this.invadersAnimationSpeed === 0) {
			// Update invaders' positions and animations
			this.updateDirection();
			this.invaders.alive.forEach((invader) => {
				invader.updateInvader(this.currentDirection, gameFrame);
			});

			const randomInvader = Math.floor(Math.random() * this.invaders.alive.length);

			if (gameFrame % 50 === 0) this.invaderProjectiles.push(this.invaders.alive[randomInvader].fire());
		}
	};

	// Handle collisions between playerProjectiles, invaders, and defender
	handleCollision = () => {
		const playerProjectilesToRemove: { index: number }[] = [];
		const invaderProjectilesToRemove: { index: number }[] = [];
		const invadersToRemove: { index: number }[] = [];

		this.invaders.alive.forEach((invader, i) => {
			this.playerProjectiles.forEach((projectile, j) => {
				const rect1 = { x: invader.props.x, y: invader.props.y, width: invader.props.width, height: invader.props.height };
				const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

				// Check if the invader and projectile rectangles intersect
				const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y || rect2.y < 0;

				if (!noCollision) {
					// Register the projectile and invader to remove
					playerProjectilesToRemove.push({ index: j });
					invadersToRemove.push({ index: i });
				}
			});
		});

		this.playerProjectiles.forEach((projectile, i) => {
			if (projectile.props.y < 0) {
				// Remove playerProjectiles that go off the screen
				playerProjectilesToRemove.push({ index: i });
			}
		});

		this.invaderProjectiles.forEach((projectile, i) => {
			const rect1 = { x: this.defender.x, y: this.defender.y, width: this.defender.width, height: this.defender.height };
			const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

			// Check if the defender and projectile rectangles intersect
			const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y || rect2.y > this.props.height;

			if (!noCollision) {
				// Register the projectile to remove
				invaderProjectilesToRemove.push({ index: i });
				this.props.setGameOverMessage("You Lose!");
				this.props.setGameOver(true);
			}
		});

		this.invaderProjectiles.forEach((projectile, i) => {
			if (projectile.props.y > this.props.height) {
				// Remove invaderProjectiles that go off the screen
				invaderProjectilesToRemove.push({ index: i });
			}
		});

		// Remove the playerProjectiles and invaders that collided
		if (playerProjectilesToRemove.length > 0 || invadersToRemove.length > 0 || invaderProjectilesToRemove.length > 0) {
			invadersToRemove?.forEach((invader) => this.invaders.alive.splice(invader.index, 1));
			playerProjectilesToRemove?.forEach((projectile) => this.playerProjectiles.splice(projectile.index, 1));
			invaderProjectilesToRemove.forEach((projectile) => this.invaderProjectiles.splice(projectile.index, 1));
		}

		const invadersArrayLength = this.invaders.alive.length;
		let speedChanged = false;

		// Adjust the animation speed and invader speed based on the number of remaining invaders
		if (invadersArrayLength < 44 && this.invadersAnimationSpeed != 30 && this.invaderSpeed != 6) {
			this.invaderSpeed = 6;
			this.invadersAnimationSpeed = 30;
			speedChanged = true;
		}
		if (invadersArrayLength < 33 && this.invadersAnimationSpeed != 20 && this.invaderSpeed != 7) {
			this.invaderSpeed = 7;
			this.invadersAnimationSpeed = 20;
			speedChanged = true;
		}
		if (invadersArrayLength < 22 && this.invadersAnimationSpeed != 10 && this.invaderSpeed != 8) {
			this.invaderSpeed = 8;
			this.invadersAnimationSpeed = 10;
			speedChanged = true;
		}
		if (invadersArrayLength < 11 && this.invadersAnimationSpeed != 5 && this.invaderSpeed != 10) {
			this.invaderSpeed = 10;
			this.invadersAnimationSpeed = 5;
			speedChanged = true;
		}
		if (invadersArrayLength === 1 && this.invadersAnimationSpeed != 1 && this.invaderSpeed != 11) {
			this.invaderSpeed = 11;
			this.invadersAnimationSpeed = 1;
			speedChanged = true;
		}

		if (speedChanged) {
			// Update the animation speed and speed for each invader
			this.invaders.alive.forEach((invader) => {
				this.invaders.alive.forEach((invader) => (invader.props.speed = this.invaderSpeed));
				invader.props.animationSpeed = this.invadersAnimationSpeed;
			});
			speedChanged = false;
		}
		// Check for collision between any invader and the defender
		this.invaders.alive.forEach((invader) => {
			const rect1 = { x: invader.props.x, y: invader.props.y, width: invader.props.width, height: invader.props.height };
			const rect2 = { x: this.defender.x, y: this.defender.y, width: this.defender.width, height: this.defender.height };

			// Check if the invader and defender rectangles intersect
			const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y;

			if (!noCollision) {
				// Set the game over flag if there is a collision
				this.props.setGameOverMessage("You Lose!");
				this.props.setGameOver(true);
			}
		});
	};

	// Draw the game entities on the canvas
	draw = (context: CanvasRenderingContext2D) => {
		this.playerProjectiles.forEach((projectile) => projectile.draw(context));
		this.invaderProjectiles.forEach((projectile) => projectile.draw(context));
		this.defender.draw(context);
		this.invaders.alive.forEach((invader) => invader.draw(context));
		this.handleCollision();
	};

	// Destroy the game by cleaning up event listeners and resources
	destroy = () => {
		this.inputHandler.destroy();
		this.invaders.destroy();
	};
}
