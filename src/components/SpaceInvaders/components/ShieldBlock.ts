interface IShieldBlock {
	x: number;
	y: number;
}

interface IParticles {
	x: number;
	y: number;
	width: number;
	height: number;
	active: boolean;
}

export class ShieldBlock {
	props: IShieldBlock;
	particles: IParticles[] = [];

	constructor({ x, y }: IShieldBlock) {
		this.props = { x, y };
	}

	update() {
		// Add any update logic here if needed
	}

	draw(context: CanvasRenderingContext2D) {
		const getShape = () => {
			const { x, y } = this.props;
			const blockSize = 3; // Size of each smaller rectangle

			const rectangles: IParticles[] = [];

			// Define the corner points of the shape
			const cornerPoints = [
				{ x: x + 0, y: y + 0 },
				{ x: x + 0, y: y - 40 },
				{ x: x + 18.1, y: y - 60 },
				{ x: x + 51.5, y: y - 60 },
				{ x: x + 68.1, y: y - 40 },
				{ x: x + 68.1, y: y + 0 },
				{ x: x + 51.5, y: y + 0 },
				{ x: x + 51.5, y: y - 8 },
				{ x: x + 44.8, y: y - 18 },
				{ x: x + 24.8, y: y - 18 },
				{ x: x + 18.1, y: y - 8 },
				{ x: x + 18.1, y: y + 0 },
			];

			// Find the minimum and maximum y-values
			let minY = Infinity;
			let maxY = -Infinity;
			cornerPoints.forEach((point) => {
				minY = Math.min(minY, point.y);
				maxY = Math.max(maxY, point.y);
			});

			// Iterate over each scanline (y-coordinate)
			for (let scanlineY = minY; scanlineY <= maxY; scanlineY++) {
				// Keep track of the active pixels in the current scanline
				const activePixels: number[] = [];

				// Iterate over each pair of consecutive corner points
				for (let i = 0; i < cornerPoints.length; i++) {
					const point1 = cornerPoints[i];
					const point2 = cornerPoints[(i + 1) % cornerPoints.length];

					// Check if the current scanline intersects the edge between the two points
					if ((point1.y <= scanlineY && scanlineY < point2.y) || (point2.y <= scanlineY && scanlineY < point1.y)) {
						// Calculate the x-coordinate where the scanline intersects the edge
						const intersectX = (point1.x * (point2.y - scanlineY) + point2.x * (scanlineY - point1.y)) / (point2.y - point1.y);

						// Add the intersecting x-coordinate to the active pixels
						activePixels.push(intersectX);
					}
				}

				// Sort the active pixels in ascending order
				activePixels.sort((a, b) => a - b);

				// Iterate over each pair of active pixels and fill the space between them
				for (let i = 0; i < activePixels.length; i += 2) {
					const startX = Math.ceil(activePixels[i]);
					const endX = Math.floor(activePixels[i + 1]);

					// Iterate over each pixel within the span and fill it
					for (let pixelX = startX; pixelX <= endX; pixelX++) {
						const rect = { x: pixelX, y: scanlineY, width: blockSize, height: blockSize, active: true };

						// Check if the rectangle already exists
						const existingRect = this.particles.find((r) => r.x === rect.x && r.y === rect.y);
						if (existingRect) {
							// Update the existing rectangle
							existingRect.width = rect.width;
							existingRect.height = rect.height;
						} else {
							// Add the new rectangle to the array
							rectangles.push(rect);
						}
					}
				}
			}

			return rectangles;
		};

		if (this.particles.length === 0) {
			this.particles = getShape();
		} else
			this.particles.forEach((rect) => {
				if (rect.active) {
					context.fillStyle = "#00d300";
					context.fillRect(rect.x, rect.y, rect.width, rect.height);
				}
			});
	}

	destroy = () => {
		// Add any destruction logic here if needed
	};
}
