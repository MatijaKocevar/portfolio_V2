import { Defender } from "./Defender";
import { InputHandler } from "./InputHandler";
import { Invader, Invaders } from "./Invader";
import { Projectile } from "./Projectile";

interface IGame {
	width: number;
	height: number;
}

export class Game {
	props: IGame;
	defender: Defender;
	inputHandler: InputHandler;
	projectiles: Projectile[] = [];
	invaders: Invaders;
	invadersArray: Invader[] = [];
	currentDirection: "left" | "right";

	constructor({ height, width }: IGame) {
		this.props = { height, width };
		this.defender = new Defender({ game: this });
		this.inputHandler = new InputHandler();
		this.invaders = new Invaders(126);
		this.currentDirection = "left";
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

	update = () => {
		this.projectiles.forEach((projectile) => projectile.update(this.projectiles));
		this.defender.update(this.inputHandler.keys);

		if (this.invadersArray) {
			this.updateDirection();
			this.invadersArray.forEach((invader) => {
				invader.updateInvader(this.currentDirection);
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
			invadersToRemove.forEach((invader) => delete this.invadersArray[invader.index]);
			projectilesToRemove.forEach((projectile) => delete this.projectiles[projectile.index]);
		}
	};

	draw = (context: CanvasRenderingContext2D) => {
		this.projectiles.forEach((projectile) => projectile.draw(context));
		this.defender.draw(context);
		const invadersDirection = this.currentDirection;

		if (invadersDirection !== this.currentDirection) {
			const newArray = this.invadersArray.reverse();
			this.invadersArray = newArray;
			this.currentDirection = invadersDirection;
		}

		this.invadersArray.forEach((invader) => invader.draw(context));
		this.handleCollision();
		// console.log("drawn invaders: ", this.invadersArray);
	};

	destroy = () => {
		this.inputHandler.destroy();
		this.invaders.destroy();
	};
}
