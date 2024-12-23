export const handleRangeInput = (e: Event, audio: HTMLAudioElement) => {
	const target = e.currentTarget as HTMLInputElement;
	
	if (audio) {
		audio.volume = Number(target.value) / 100;
	}

	const valNumber = document.querySelector(".weather__volume-val");
	valNumber.textContent = target.value;

	return {volumeRange: target.value}
};
