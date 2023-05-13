import { Defender } from "./Defender";
import { InputHandler } from "./InputHandler";
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

	constructor({ height, width }: IGame) {
		this.props = { height, width };
		this.defender = new Defender({ game: this });
		this.inputHandler = new InputHandler();
	}

	update() {
		this.projectiles.forEach((projectile) => projectile.update(this.projectiles));
		this.defender.update(this.inputHandler.keys);
	}

	draw(context: CanvasRenderingContext2D) {
		this.projectiles.forEach((projectile) => projectile.draw(context));
		this.defender.draw(context);
	}

	destroy() {
		this.inputHandler.destroy();
	}
}
