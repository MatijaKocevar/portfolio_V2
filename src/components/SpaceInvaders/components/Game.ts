import { Defender } from "./Defender";
import { InputHandler } from "./InputHandler";
import { Invaders } from "./Invader";
import { Projectiles } from "./Projectile";
import { Shields } from "./ShieldBlock";

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
	inputHandler: InputHandler;
	defender: Defender;
	invaders: Invaders;
	shields: Shields;
	projectiles: Projectiles;

	constructor({ height, width, mobileControls, setGameOver, setGameOverMessage, context }: IGame) {
		this.props = { height, width, mobileControls, setGameOver, setGameOverMessage, context };
		this.inputHandler = new InputHandler(mobileControls);
		this.shields = new Shields({ game: this });
		this.invaders = new Invaders({ game: this });
		this.defender = new Defender({ game: this });
		this.projectiles = new Projectiles({ game: this });
	}

	// Update the game state in each frame
	update = (gameFrame: number) => {
		this.invaders.updateInvaders(gameFrame);
		this.defender.update();
		this.projectiles.update();
		this.handleCollision();
	};

	handleCollision = () => {
		this.projectiles.checkOutOfBounds();
		this.invaders.handleCollision();
		this.defender.handleCollision();
		this.shields.handleCollision();
	};

	// // Handle collisions between playerProjectiles, invaders, and defender

	// handleCollisionOld = () => {
	// 	const playerProjectilesToRemove: { index: number }[] = [];
	// 	const invaderProjectilesToRemove: { index: number }[] = [];
	// 	const invadersToRemove: { index: number }[] = [];
	// 	const shieldBlocksToRemove: { index: number; shieldIndex: number }[] = [];

	// 	this.shieldBlocks.forEach((shieldBlock, s) => {
	// 		shieldBlock.particles.forEach((particle, i) => {
	// 			this.playerProjectiles.forEach((projectile, j) => {
	// 				if (!particle.active) return;
	// 				const rect1 = { x: particle.x, y: particle.y, width: particle.width, height: particle.height };
	// 				const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

	// 				// Check if the particle and projectile rectangles intersect
	// 				const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y;

	// 				if (!noCollision) {
	// 					playerProjectilesToRemove.push({ index: j });
	// 					shieldBlocksToRemove.push({ index: i, shieldIndex: s });
	// 				}
	// 			});
	// 			this.invaderProjectiles.forEach((projectile, j) => {
	// 				if (!particle.active) return;
	// 				const rect1 = { x: particle.x, y: particle.y, width: particle.width, height: particle.height };
	// 				const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

	// 				// Check if the particle and projectile rectangles intersect
	// 				const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y;

	// 				if (!noCollision) {
	// 					invaderProjectilesToRemove.push({ index: j });
	// 					shieldBlocksToRemove.push({ index: i, shieldIndex: s });
	// 				}
	// 			});
	// 		});
	// 	});

	// 	// Check for collision between any invader and the defender
	// 	this.invaders.alive.forEach((invader) => {
	// 		const rect1 = { x: invader.props.x, y: invader.props.y, width: invader.props.width, height: invader.props.height };
	// 		const rect2 = { x: this.defender.x, y: this.defender.y, width: this.defender.width, height: this.defender.height };

	// 		// Check if the invader and defender rectangles intersect
	// 		const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y;

	// 		if (!noCollision) {
	// 			// Set the game over flag if there is a collision
	// 			this.props.setGameOverMessage("You Lose!");
	// 			this.props.setGameOver(true);
	// 		}
	// 	});

	// 	// Check for collisions between playerProjectiles and invaders
	// 	this.invaders.alive.forEach((invader, i) => {
	// 		this.playerProjectiles.forEach((projectile, j) => {
	// 			const rect1 = { x: invader.props.x, y: invader.props.y, width: invader.props.width, height: invader.props.height };
	// 			const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

	// 			// Check if the invader and projectile rectangles intersect
	// 			const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y || rect2.y < 0;

	// 			if (!noCollision) {
	// 				// Register the projectile and invader to remove
	// 				playerProjectilesToRemove.push({ index: j });
	// 				invadersToRemove.push({ index: i });
	// 			}
	// 		});
	// 	});

	// 	// Chech if playerProjectiles go off the screen
	// 	this.playerProjectiles.forEach((projectile, i) => {
	// 		if (projectile.props.y < 0) {
	// 			// Remove playerProjectiles that go off the screen
	// 			playerProjectilesToRemove.push({ index: i });
	// 		}
	// 	});

	// 	// Check if enemy projectiles hit the defender
	// 	this.invaderProjectiles.forEach((projectile, i) => {
	// 		const rect1 = { x: this.defender.x, y: this.defender.y, width: this.defender.width, height: this.defender.height };
	// 		const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

	// 		// Check if the defender and projectile rectangles intersect
	// 		const noCollision = rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y || rect2.y > this.props.height;

	// 		if (!noCollision) {
	// 			// Register the projectile to remove
	// 			invaderProjectilesToRemove.push({ index: i });
	// 			this.props.setGameOverMessage("You Lose!");
	// 			this.props.setGameOver(true);
	// 		}
	// 	});

	// 	// Chech if invaderProjectiles go off the screen
	// 	this.invaderProjectiles.forEach((projectile, i) => {
	// 		if (projectile.props.y > this.props.height) {
	// 			// Remove invaderProjectiles that go off the screen
	// 			invaderProjectilesToRemove.push({ index: i });
	// 		}
	// 	});

	// 	// Remove the playerProjectiles and invaders that collided
	// 	if (playerProjectilesToRemove.length > 0 || invadersToRemove.length > 0 || invaderProjectilesToRemove.length > 0 || shieldBlocksToRemove.length > 0) {
	// 		invadersToRemove?.forEach((invader) => this.invaders.alive.splice(invader.index, 1));
	// 		playerProjectilesToRemove?.forEach((projectile) => this.playerProjectiles.splice(projectile.index, 1));
	// 		invaderProjectilesToRemove.forEach((projectile) => this.invaderProjectiles.splice(projectile.index, 1));
	// 		shieldBlocksToRemove.forEach((block) => {
	// 			this.shieldBlocks[block.shieldIndex].particles[block.index].active = false;
	// 		});
	// 	}
	// };

	// Draw the game entities on the canvas

	draw = (context: CanvasRenderingContext2D) => {
		context.clearRect(0, 0, this.props.width, this.props.height);
		this.invaders.draw();
		this.defender.draw();
		this.shields.draw();
		this.projectiles.draw();
	};

	// Destroy the game by cleaning up event listeners and resources
	destroy = () => {
		this.inputHandler.destroy();
		this.invaders.destroy();
		this.shields.shieldArray = [];
		this.defender.destroy();
	};
}
