import { Game } from "./Game";
import { InputHandler } from "./InputHandler";
import { Projectile } from "./Projectile";
import player from "../sprites/player.png";
interface IDefender {
	game: Game;
}

export class Defender {
	game: Game;
	width: number;
	height: number;
	x: number;
	y: number;
	speed: number;
	maxSpeed: number;
	timeout = 0;
	reload = false;
	image: HTMLImageElement;

	constructor({ game }: IDefender) {
		this.game = game;
		this.width = 35;
		this.height = 35;
		this.x = this.game.props.width / 2 - this.width / 2;
		this.y = this.game.props.height - (this.height + 10);
		this.speed = 0;
		this.maxSpeed = 5;
		this.image = new Image();
		this.image.src = player;
	}

	update = (input: InputHandler["keys"]) => {
		//horizontal movement
		this.x += this.speed;
		if (input.includes("KeyD")) this.speed = this.maxSpeed;
		else if (input.includes("KeyA")) this.speed = -this.maxSpeed;
		else this.speed = 0;

		//fire
		if (input.includes("Enter")) {
			if (!this.reload) {
				this.game.playerProjectiles.push(this.fire());
				this.reload = true;
				this.timeout = setTimeout(() => {
					this.reload = false;
				}, 200);
			}
		}

		//dont allow defender to go off screen
		if (this.x < 0) this.x = 0;
		if (this.x > this.game.props.width - this.width) this.x = this.game.props.width - this.width;
	};

	fire = () => {
		const projectile = new Projectile({
			height: 10,
			width: 3,
			speed: 10,
			x: this.x + this.width / 2 - 2,
			y: this.y,
			color: "red",
			direction: "up",
		});

		return projectile;
	};

	draw(context: CanvasRenderingContext2D) {
		if (this.image) context.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}
