export class InputHandler {
	keys: string[];
	mobileControls: React.RefObject<HTMLButtonElement>[];

	constructor(mobileControls: React.RefObject<HTMLButtonElement>[]) {
		this.keys = [];
		this.mobileControls = mobileControls;

		this.mobileControls?.forEach((control) => {
			if (control.current) {
				control.current.addEventListener("touchstart", (e) => this.onTouchStart(e, control));

				control.current.addEventListener("touchend", (e) => this.onTouchEnd(e, control));
			}
		});

		window.addEventListener("keydown", this.keydownHandler);
		window.addEventListener("keyup", this.keyupHandler);
	}

	onTouchStart = (e: TouchEvent, control: React.RefObject<HTMLButtonElement>) => {
		e.preventDefault();
		if (control.current) {
			if (control.current.id === "left") this.keys.push("KeyA");
			if (control.current.id === "right") this.keys.push("KeyD");
			if (control.current.id === "fire") this.keys.push("Enter");
		}
	};

	onTouchEnd = (e: TouchEvent, control: React.RefObject<HTMLButtonElement>) => {
		e.preventDefault();
		if (control.current) {
			if (control.current.id === "left") this.keys.splice(this.keys.indexOf("KeyA"), 1);
			if (control.current.id === "right") this.keys.splice(this.keys.indexOf("KeyD"), 1);
			if (control.current.id === "fire") this.keys.splice(this.keys.indexOf("Enter"), 1);
		}
	};

	keydownHandler = (e: KeyboardEvent) => {
		e.preventDefault();

		if ((e.code === "KeyW" || e.code === "KeyA" || e.code === "KeyS" || e.code === "KeyD" || e.code === "Enter") && this.keys.indexOf(e.code) === -1) {
			this.keys.push(e.code);
		}

		// console.log(e.code, this.keys);
	};

	keyupHandler = (e: KeyboardEvent) => {
		e.preventDefault();

		if (e.code === "KeyW" || e.code === "KeyA" || e.code === "KeyS" || e.code === "KeyD" || e.code === "Enter") {
			this.keys.splice(this.keys.indexOf(e.code), 1);
		}

		// console.log(e.code, this.keys);
	};

	destroy = () => {
		window.removeEventListener("keydown", this.keydownHandler);
		window.removeEventListener("keyup", this.keyupHandler);
	};
}
