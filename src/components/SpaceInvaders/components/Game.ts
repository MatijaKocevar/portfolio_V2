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
	score = 0;

	constructor({ height, width, mobileControls, setGameOver, setGameOverMessage, context }: IGame) {
		this.props = { height, width, mobileControls, setGameOver, setGameOverMessage, context };
		this.inputHandler = new InputHandler(mobileControls, this);
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

	drawHighscore = () => {
		const { context } = this.props;

		context.fillStyle = "white";
		context.font = "bold 15px Arial";
		context.textAlign = "center";
		context.fillText("SCORE ", 40, 20);

		context.fillStyle = "#00d300";
		context.font = "bold 15px Arial";
		context.textAlign = "center";
		context.fillText(this.score.toString(), 80, 20);
	};

	drawLives = () => {
		const { context, width } = this.props;

		context.fillStyle = "white";
		context.font = "bold 15px Arial";
		context.textAlign = "center";
		context.fillText(this.defender.lives.toString(), width - 80, 20);

		for (let i = 0; i < this.defender.lives - 1; i++) {
			const offset = i * 10;
			context.drawImage(this.defender.image, width - 65 + i * 20 + offset, 3, 20, 20);
		}
	};

	draw = () => {
		const { context } = this.props;
		context.clearRect(0, 0, this.props.width, this.props.height);

		this.invaders.draw();
		this.defender.draw();
		this.shields.draw();
		this.projectiles.draw();

		this.drawHighscore();
		this.drawLives();

		console.log(this.shields.shieldArray[0]);
	};

	destroy = () => {
		this.inputHandler.destroy();
		this.invaders.destroy();
		this.shields.destroy();
		this.defender.destroy();
	};
}
