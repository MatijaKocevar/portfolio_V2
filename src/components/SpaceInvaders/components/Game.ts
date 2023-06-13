import { Defender } from "./Defender";
import { InputHandler } from "./InputHandler";
import { Invaders } from "./Invader";
import { Projectile } from "./Projectile";
import { ShieldBlock } from "./ShieldBlock";

interface IGame {
	width: number;
	height: number;
	mobileControls: React.RefObject<HTMLButtonElement>[];
	setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
	setGameOverMessage: React.Dispatch<React.SetStateAction<string>>;
	context: CanvasRenderingContext2D;
}

export class Game {
	props: IGame;
	defender: Defender;
	inputHandler: InputHandler;
	playerProjectiles: Projectile[] = [];
	invaderProjectiles: Projectile[] = [];
	invaders: Invaders;
	shieldBlocks: ShieldBlock[] = [];
	currentDirection: "left" | "right";

	constructor({ height, width, mobileControls, setGameOver, setGameOverMessage, context }: IGame) {
		this.props = { height, width, mobileControls, setGameOver, setGameOverMessage, context };
		this.defender = new Defender({ game: this });
		this.inputHandler = new InputHandler(mobileControls);
		this.invaders = new Invaders();
		this.currentDirection = "right";

		this.invaders.createInvaders();

		const canvasWidth = width;
		const shieldWidth = 68.1;
		const shieldSpacing = (canvasWidth - 4 * shieldWidth) / 5; // Total spacing divided equally before and after the shields

		this.shieldBlocks.push(new ShieldBlock({ x: shieldSpacing, y: 500 }));
		this.shieldBlocks.push(new ShieldBlock({ x: shieldSpacing + shieldWidth + shieldSpacing, y: 500 }));
		this.shieldBlocks.push(new ShieldBlock({ x: shieldSpacing + 2 * shieldWidth + 2 * shieldSpacing, y: 500 }));
		this.shieldBlocks.push(new ShieldBlock({ x: shieldSpacing + 3 * shieldWidth + 3 * shieldSpacing, y: 500 }));
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
		this.invaders.updateInvaders();

		if (this.invaders.alive.some((invader) => invader.props.y > 510)) {
			this.props.setGameOver(true);
		}
		// Update invaderProjectiles' positions
		this.invaderProjectiles.forEach((projectile) => projectile.update());
		// Update playerProjectiles' positions
		this.playerProjectiles.forEach((projectile) => projectile.update());
		// Update defender's position based on input
		this.defender.update(this.inputHandler.keys);

		if (this.invaders.alive && gameFrame % this.invaders.animationSpeed === 0) {
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
		const shieldBlocksToRemove: { index: number; shieldIndex: number }[] = [];

		this.shieldBlocks.forEach((shieldBlock, s) => {
			shieldBlock.particles.forEach((particle, i) => {
				this.playerProjectiles.forEach((projectile, j) => {
					if (!particle.active) return;
					const rect1 = { x: particle.x, y: particle.y, width: particle.width, height: particle.height };
					const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

					// Check if the particle and projectile rectangles intersect
					const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y;

					if (!noCollision) {
						playerProjectilesToRemove.push({ index: j });
						shieldBlocksToRemove.push({ index: i, shieldIndex: s });
					}
				});
				this.invaderProjectiles.forEach((projectile, j) => {
					if (!particle.active) return;
					const rect1 = { x: particle.x, y: particle.y, width: particle.width, height: particle.height };
					const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

					// Check if the particle and projectile rectangles intersect
					const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y;

					if (!noCollision) {
						invaderProjectilesToRemove.push({ index: j });
						shieldBlocksToRemove.push({ index: i, shieldIndex: s });
					}
				});
			});
		});

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

		// Check for collisions between playerProjectiles and invaders
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

		// Chech if playerProjectiles go off the screen
		this.playerProjectiles.forEach((projectile, i) => {
			if (projectile.props.y < 0) {
				// Remove playerProjectiles that go off the screen
				playerProjectilesToRemove.push({ index: i });
			}
		});

		// Check if enemy projectiles hit the defender
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

		// Chech if invaderProjectiles go off the screen
		this.invaderProjectiles.forEach((projectile, i) => {
			if (projectile.props.y > this.props.height) {
				// Remove invaderProjectiles that go off the screen
				invaderProjectilesToRemove.push({ index: i });
			}
		});

		// Remove the playerProjectiles and invaders that collided
		if (playerProjectilesToRemove.length > 0 || invadersToRemove.length > 0 || invaderProjectilesToRemove.length > 0 || shieldBlocksToRemove.length > 0) {
			invadersToRemove?.forEach((invader) => this.invaders.alive.splice(invader.index, 1));
			playerProjectilesToRemove?.forEach((projectile) => this.playerProjectiles.splice(projectile.index, 1));
			invaderProjectilesToRemove.forEach((projectile) => this.invaderProjectiles.splice(projectile.index, 1));
			shieldBlocksToRemove.forEach((block) => {
				// this.shieldBlocks[block.shieldIndex].particles.splice(block.index, 1);
				// delete this.shieldBlocks[block.shieldIndex].particles[block.index];
				this.shieldBlocks[block.shieldIndex].particles[block.index].active = false;
			});
		}
	};

	// Draw the game entities on the canvas
	draw = (context: CanvasRenderingContext2D) => {
		this.handleCollision();
		context.clearRect(0, 0, this.props.width, this.props.height);
		this.shieldBlocks.forEach((block) => block.draw(context));
		this.playerProjectiles.forEach((projectile) => projectile.draw(context));
		this.invaderProjectiles.forEach((projectile) => projectile.draw(context));
		this.defender.draw(context);
		this.invaders.alive.forEach((invader) => invader.draw(context));
	};

	// Destroy the game by cleaning up event listeners and resources
	destroy = () => {
		this.inputHandler.destroy();
		this.invaders.destroy();
	};
}
