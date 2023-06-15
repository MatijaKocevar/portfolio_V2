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

	draw = (context: CanvasRenderingContext2D) => {
		context.clearRect(0, 0, this.props.width, this.props.height);
		this.invaders.draw();
		this.defender.draw();
		this.shields.draw();
		this.projectiles.draw();
	};

	destroy = () => {
		this.inputHandler.destroy();
		this.invaders.destroy();
		this.shields.destroy();
		this.defender.destroy();
	};
}
