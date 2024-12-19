export const handleRangeInput = (e: Event, volumeRange: string, audio: HTMLAudioElement) => {
	const target = e.currentTarget as HTMLInputElement;
	volumeRange = target.value; // Теперь TypeScript знает, что это HTMLInputElement
	if (audio) {
		audio.volume = Number(volumeRange) / 100;
	}

	const valNumber = document.querySelector(".weather__volume-val");
	valNumber.textContent = volumeRange;

	return {volumeRange}
};
