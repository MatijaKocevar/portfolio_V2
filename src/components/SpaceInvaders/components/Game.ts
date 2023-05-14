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
	invaders: Invader[];

	constructor({ height, width }: IGame) {
		this.props = { height, width };
		this.defender = new Defender({ game: this });
		this.inputHandler = new InputHandler();
		this.invaders = new Invaders(120).createInvaders();
	}

	update = () => {
		this.projectiles.forEach((projectile) => projectile.update(this.projectiles));
		this.defender.update(this.inputHandler.keys);
		this.invaders.forEach((invader) => {
			invader.updateInvader(this.props.width);
		});
	};

	draw = (context: CanvasRenderingContext2D) => {
		this.projectiles.forEach((projectile) => projectile.draw(context));
		this.defender.draw(context);
		this.invaders.forEach((invader) => invader.draw(context));
	};

	destroy = () => {
		this.inputHandler.destroy();
	};
}
