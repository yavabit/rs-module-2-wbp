import { renderElem } from "../../shared/helpers/renderElem"

interface IVolumeInput {
	render: ({container, listener, volumeRange}: IRender) => void
}

interface IRender {
	container: Element,
	listener: (e: Event) => void
	volumeRange?: string,
}

export class VolumeInput implements IVolumeInput {
	constructor() { }
	render({container, listener, volumeRange = "50"}: IRender) {
		const formControl = renderElem("div", container, "weather-form-control")
		const range = renderElem("input", formControl, "weather__input-range")
		range.setAttribute("type", "range")
		
		const volume = renderElem("span", formControl, "weather__volume-val")
		volume.setAttribute("type", "number")
		volume.textContent = volumeRange
		
		range.addEventListener("input", function(e) {
		  listener(e)
		})
	}
}