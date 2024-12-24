import { getAudio, getBackImg, getIcon, IDataItem } from "../mocks/data";

interface IPausePlay {
	item: IDataItem;
	icon: HTMLElement;
	audio: HTMLAudioElement;
	currentAudioId: number;
	volumeRange: string;
	body: HTMLBodyElement;
}

export const pausePlayAudio = ({ item, icon, audio, currentAudioId, volumeRange = "50", body, }: IPausePlay) => {
	if (currentAudioId === item.id && audio) {
		toggleAudioPlayback(audio, icon);
	} else {
		if (audio) {
			stopPrevAudio(audio, currentAudioId, item.icon);
		}

		audio = new Audio(getAudio(item.audio));
		audio.volume = Number(volumeRange) / 100;
		audio.play();
		currentAudioId = item.id;
		icon.style.backgroundImage = `url(${getIcon("pause")})`;
		icon.classList.add("active");
	}

	body.style.backgroundImage = `url(${getBackImg(item.img)})`;

	return {
		audio,
		currentAudioId,
	};
};

// переклюючение аудио
const toggleAudioPlayback = (audio: HTMLAudioElement, icon: HTMLElement) => {
	if (audio.paused) {
		audio.play();
		icon.classList.add("active");
	} else {
		audio.pause();
		icon.classList.remove("active");
		icon.style.backgroundImage = `url(${getIcon("play")})`;
	}
};

// пауза предыдущего аудио
const stopPrevAudio = (
	audio: HTMLAudioElement,
	currentAudioId: number,
	icon: "sun" | "rain" | "snow" | "pause" | "play"
) => {
	audio.pause();
	audio.currentTime = 0;

	const previousIcon = document.getElementById( currentAudioId?.toString() || "" );
	if (previousIcon) {
		previousIcon.style.backgroundImage = `url(${getIcon(icon)})`;
		previousIcon.classList.remove("active");
	}
};
