import { Game } from "./Game";
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
	lives = 3;

	constructor({ game }: IDefender) {
		this.game = game;
		this.width = 42;
		this.height = 40;
		this.x = this.game.props.width / 2 - this.width / 2;
		this.y = this.game.props.height - (this.height + 10);
		this.speed = 0;
		this.maxSpeed = 5;
		this.image = new Image();
		this.image.src = player;
	}

	update = () => {
		const { inputHandler } = this.game;
		//horizontal movement
		this.x += this.speed;
		if (inputHandler.keys.includes("KeyD")) this.speed = this.maxSpeed;
		else if (inputHandler.keys.includes("KeyA")) this.speed = -this.maxSpeed;
		else this.speed = 0;

		if (inputHandler.keys.includes("Enter") && this.game.projectiles.defender.length == 0) {
			if (!this.reload) {
				this.game.projectiles.defender.push(this.fire());
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
			width: 2,
			speed: 10,
			x: this.x + this.width / 2 - 2,
			y: this.y,
			color: "#00d300",
			direction: "up",
			game: this.game,
		});

		return projectile;
	};

	draw() {
		const { context } = this.game.props;
		if (this.image) {
			// context.fillStyle = "red";
			// context.fillRect(this.x, this.y + 17, this.width, this.height - 23);
			context.drawImage(this.image, this.x, this.y, this.width, this.height);
		}
	}

	handleCollision = () => {
		const { projectiles } = this.game;
		if (projectiles.invader.some((projectile) => projectile.props.y > this.game.props.height - 500)) {
			projectiles.invader.forEach((projectile) => {
				const { x: pX, y: pY, width: pW, height: pH } = projectile.props;

				const collided = pX < this.x + this.width && pX + pW > this.x && pY < this.y + 17 + (this.height - 23) && pY + pH > this.y + 17;

				if (collided) {
					this.game.props.setGameOverMessage("An invader shot you! You Lose!");
					this.game.props.setGameOver(true);
				}
			});
		}
	};

	destroy = () => {
		clearTimeout(this.timeout);
	};
}
