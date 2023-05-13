import { Defender } from "./Defender";
import { InputHandler } from "./InputHandler";

interface IGame {
	width: number;
	height: number;
}

export class Game {
	props: IGame;
	defender: Defender;
	inputHandler: InputHandler;

	constructor(props: IGame) {
		this.props = props;
		this.defender = new Defender({ game: this });
		this.inputHandler = new InputHandler();
	}

	update() {
		this.defender.update(this.inputHandler.keys);
	}

	draw(context: CanvasRenderingContext2D) {
		this.defender.draw(context);
	}

	destroy() {
		this.inputHandler.destroy();
	}
}
