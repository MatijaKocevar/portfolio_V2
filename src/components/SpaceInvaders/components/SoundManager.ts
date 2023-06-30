import invaderDeath from "../audio/invaderkilled.wav";
import explosion from "../audio/explosion.wav";
import shoot from "../audio/shoot.wav";

export class SoundManager {
	sounds: {
		[key: string]: HTMLAudioElement;
	};

	constructor() {
		this.sounds = {
			invaderDeath: new Audio(invaderDeath),
			explosion: new Audio(explosion),
			shoot: new Audio(shoot),
		};
	}

	playSound(name: string) {
		const sound = this.sounds[name];
		if (sound) {
			sound.play();
		}
	}
}
