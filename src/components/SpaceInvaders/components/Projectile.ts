interface IProjectile {
	speed: number;
	x: number;
	y: number;
	width: number;
	height: number;
}

export class Projectile {
	props: IProjectile;

	constructor({ height, speed, width, x, y }: IProjectile) {
		this.props = { height, speed, width, x, y };
	}

	update() {
		this.props.y -= this.props.speed;
	}

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = "green";
		context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
	}

	destroy = () => {};
}
