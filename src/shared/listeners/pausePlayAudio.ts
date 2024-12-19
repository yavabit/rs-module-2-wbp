import { getAudio, getBackImg, getIcon, IDataItem } from "../mocks/data";

interface IPausePlay {
	item: IDataItem
	icon: HTMLElement
	audio: HTMLAudioElement
	currentAudioId: number
	volumeRange: string
	body: HTMLBodyElement
}

export const pausePlayAudio = ({item, icon, audio, currentAudioId, volumeRange, body}: IPausePlay) => {

  if (currentAudioId === item.id) {
	if (audio) {
	  if (audio.paused) {
		audio.play();
		icon.classList.add("active")
	  } else {
		audio.pause();
		icon.classList.remove("active")
		icon.style.backgroundImage = `url(${getIcon("play")})`
	  }
	}
  } else {

	if (audio) {
	  audio.pause();
	  audio.currentTime = 0;
	  const previousIcon = document.getElementById(currentAudioId?.toString() || "");
	  if (previousIcon) {
		previousIcon.style.backgroundImage = `url(${getIcon(item.icon)})`;
		previousIcon.classList.remove("active")
	  }
	}
	audio = new Audio(getAudio(item.audio));
	audio.volume = Number(volumeRange) / 100
	audio.play();
	currentAudioId = item.id;
	icon.style.backgroundImage = `url(${getIcon("pause")})`;
	icon.classList.add("active")
  }

  body.style.backgroundImage = `url(${getBackImg(item.img)})`;

  return {
	audio,
	currentAudioId
  }
}