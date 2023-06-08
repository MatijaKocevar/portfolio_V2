import { Defender } from "./Defender";
import { InputHandler } from "./InputHandler";
import { Invader, Invaders } from "./Invader";
import { Projectile } from "./Projectile";

interface IGame {
	width: number;
	height: number;
	mobileControls: React.RefObject<HTMLButtonElement>[];
	setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export class Game {
	props: IGame;
	defender: Defender;
	inputHandler: InputHandler;
	projectiles: Projectile[] = [];
	invaders: Invaders;
	invadersArray: Invader[] = [];
	currentDirection: "left" | "right";
	invadersSpeed = 70;

	constructor({ height, width, mobileControls, setGameOver }: IGame) {
		this.props = { height, width, mobileControls, setGameOver };
		this.defender = new Defender({ game: this });
		this.inputHandler = new InputHandler(mobileControls);
		this.invaders = new Invaders({ invadersSpeed: this.invadersSpeed });
		this.currentDirection = "right";
		this.invadersArray = this.invaders.createInvaders();
	}

	updateDirection = () => {
		// Check if the invader has hit the left or right wall

		if (this.invadersArray.some((invader) => invader.props.x <= 5)) {
			this.currentDirection = "right";
		}

		if (this.invadersArray.some((invader) => invader.props.x + invader.props.width + 5 >= this.props.width)) {
			this.currentDirection = "left";
		}
	};

	update = (gameFrame: number) => {
		this.projectiles.forEach((projectile) => projectile.update(this.projectiles));
		this.defender.update(this.inputHandler.keys);

		if (this.invadersArray && gameFrame % this.invadersSpeed === 0) {
			this.updateDirection();
			this.invadersArray.forEach((invader) => {
				invader.updateInvader(this.currentDirection, gameFrame);
			});
		}
	};

	handleCollision = () => {
		const projectilesToRemove: { index: number }[] = [];
		const invadersToRemove: { index: number }[] = [];

		this.invadersArray.forEach((invader, i) => {
			this.projectiles.forEach((projectile, j) => {
				const rect1 = { x: invader.props.x, y: invader.props.y, width: invader.props.width, height: invader.props.height };
				const rect2 = { x: projectile.props.x, y: projectile.props.y, width: projectile.props.width, height: projectile.props.height };

				if (rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y) {
					// console.log("no collision");
				} else {
					projectilesToRemove.push({ index: j });
					invadersToRemove.push({ index: i });
				}
			});
		});

		if (projectilesToRemove.length > 0 && invadersToRemove.length > 0) {
			invadersToRemove.forEach((invader) => this.invadersArray.splice(invader.index, 1));
			projectilesToRemove.forEach((projectile) => this.projectiles.splice(projectile.index, 1));
		}

		for (let i = 0; i < invadersToRemove.length; i++) {
			if (this.invadersSpeed > 5) {
				this.invadersSpeed -= 5;
				this.invadersArray.forEach((invader) => {
					invader.props.animationSpeed = this.invadersSpeed;
				});
			}
		}

		this.invadersArray.forEach((invader) => {
			const rect1 = { x: invader.props.x, y: invader.props.y, width: invader.props.width, height: invader.props.height };
			const rect2 = { x: this.defender.x, y: this.defender.y, width: this.defender.width, height: this.defender.height };

			if (rect1.x > rect2.x + rect2.width || rect1.x + rect1.width < rect2.x || rect1.y > rect2.y + rect2.height || rect1.y + rect1.height < rect2.y) {
				// console.log("no collision");
			} else {
				this.props.setGameOver(true);
			}
		});
	};

	draw = (context: CanvasRenderingContext2D) => {
		this.projectiles.forEach((projectile) => projectile.draw(context));
		this.defender.draw(context);
		this.invadersArray.forEach((invader) => invader.draw(context));
		this.handleCollision();
		// console.log("drawn invaders: ", this.invadersArray);
	};

	destroy = () => {
		this.inputHandler.destroy();
		this.invaders.destroy();
	};
}
