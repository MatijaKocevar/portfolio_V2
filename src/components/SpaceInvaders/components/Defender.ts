import context from "react-bootstrap/esm/AccordionContext";
import { Game } from "./Game";
import { InputHandler } from "./InputHandler";
import { Projectile } from "./Projectile";

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

	constructor({ game }: IDefender) {
		this.game = game;
		this.width = 40;
		this.height = 20;
		this.x = this.game.props.width / 2 - this.width / 2;
		this.y = this.game.props.height - (this.height + 10);
		this.speed = 0;
		this.maxSpeed = 5;
	}

	update(input: InputHandler["keys"]) {
		//horizontal movement
		this.x += this.speed;
		if (input.includes("KeyD")) this.speed = this.maxSpeed;
		else if (input.includes("KeyA")) this.speed = -this.maxSpeed;
		else this.speed = 0;

		//fire
		if (input.includes("Space")) {
			if (!this.reload) {
				this.game.projectiles.push(this.fire());
				this.reload = true;
				this.timeout = setTimeout(() => {
					this.reload = false;
				}, 200);
			}
		}

		//dont allow defender to go off screen
		if (this.x < 0) this.x = 0;
		if (this.x > this.game.props.width - this.width) this.x = this.game.props.width - this.width;
	}

	fire() {
		//this.x + this.width / 2 - 2.5, this.y, 5, 10, 20
		const projectile = new Projectile({
			height: 10,
			width: 5,
			speed: 10,
			x: this.x + this.width / 2 - 2.5,
			y: this.y,
		});

		return projectile;
	}

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = "white";
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}
