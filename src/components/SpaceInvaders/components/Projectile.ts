interface IProjectile {
	speed: number;
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
}

export class Projectile {
	props: IProjectile;

	constructor({ height, speed, width, x, y, color }: IProjectile) {
		this.props = { height, speed, width, x, y, color };
	}

	update() {
		this.props.y -= this.props.speed;
	}

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = this.props.color;
		context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
	}

	destroy = () => {};
}
