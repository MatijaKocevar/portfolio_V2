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
		this.currentDirection = this.invaders.direction;
		this.invadersArray = this.invaders.createInvaders();
	}

	update = () => {
		this.projectiles.forEach((projectile) => projectile.update(this.projectiles));
		this.defender.update(this.inputHandler.keys);

		if (this.invadersArray) {
			this.invadersArray.forEach((invader) => {
				invader.updateInvader(this.props.width);
			});
		}
	};

	draw = (context: CanvasRenderingContext2D) => {
		this.projectiles.forEach((projectile) => projectile.draw(context));
		this.defender.draw(context);
		const invadersDirection = this.invaders.getDirection();

		if (invadersDirection !== this.currentDirection) {
			const newArray = this.invadersArray.reverse();
			this.invadersArray = newArray;
			this.currentDirection = invadersDirection;
		}

		this.invadersArray.forEach((invader) => invader.draw(context));
		// console.log("drawn invaders: ", this.invadersArray);
	};

	destroy = () => {
		this.inputHandler.destroy();
		this.invaders.destroy();
	};
}
