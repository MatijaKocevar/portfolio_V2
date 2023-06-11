interface IProjectile {
	speed: number;
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
	direction: "up" | "down";
}

export class Projectile {
	props: IProjectile;

	constructor({ height, speed, width, x, y, color, direction }: IProjectile) {
		this.props = { height, speed, width, x, y, color, direction };
	}

	update() {
		if (this.props.direction === "down") this.props.y += this.props.speed;
		if (this.props.direction === "up") this.props.y -= this.props.speed;
	}

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = this.props.color;
		context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
	}

	destroy = () => {};
}
