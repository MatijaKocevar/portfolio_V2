interface IProjectile {
	speed: number;
	x: number;
	y: number;
	width: number;
	height: number;
}

let counter = 0;

export class Projectile {
	id: number;
	props: IProjectile;

	constructor({ height, speed, width, x, y }: IProjectile) {
		this.props = { height, speed, width, x, y };
		this.id = counter;
		counter++;
	}

	update(projectiles: Projectile[]) {
		if (this.props.y <= 10) {
			if (projectiles) {
				const newProjectiles = projectiles.slice(1);
				if (newProjectiles) projectiles = newProjectiles;
			}
		}

		this.props.y -= this.props.speed;
	}

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = "green";
		context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
	}

	destroy = () => {
		counter = 0;
	};
}
