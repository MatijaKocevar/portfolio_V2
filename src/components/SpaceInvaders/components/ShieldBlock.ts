interface IShieldBlock {
	x: number;
	y: number;
}

export class ShieldBlock {
	props: IShieldBlock;

	constructor({ x, y }: IShieldBlock) {
		this.props = { x, y };
	}

	update() {
		// Add any update logic here if needed
	}

	draw(context: CanvasRenderingContext2D) {
		const { x, y } = this.props;

		context.beginPath();
		const region = new Path2D();

		const x0 = x;
		const x1 = x;
		const x2 = x + 18.1;
		const x3 = x + 51.5;
		const x4 = x + 68.1;
		const x5 = x + 68.1;
		const x6 = x + 51.5;
		const x7 = x + 51.5;
		const x8 = x + 44.8;
		const x9 = x + 24.8;
		const x10 = x + 18.1;
		const x11 = x + 18.1;

		const y0 = y;
		const y1 = y - 40;
		const y2 = y - 60;
		const y3 = y - 60;
		const y4 = y - 40;
		const y5 = y;
		const y6 = y;
		const y7 = y - 8;
		const y8 = y - 18;
		const y9 = y - 18;
		const y10 = y - 8;
		const y11 = y;

		// Draw the left side of the shape
		region.moveTo(x0, y0);
		region.lineTo(x1, y1);
		region.lineTo(x2, y2);
		region.lineTo(x3, y3);
		region.lineTo(x4, y4);
		region.lineTo(x5, y5);
		region.lineTo(x6, y6);
		region.lineTo(x7, y7);
		region.lineTo(x8, y8);
		region.lineTo(x9, y9);
		region.lineTo(x10, y10);
		region.lineTo(x11, y11);

		region.closePath();

		context.fillStyle = "#00d300";
		context.fill(region);
	}

	destroy = () => {
		// Add any destruction logic here if needed
	};
}
