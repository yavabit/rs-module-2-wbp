import { getBackImg, getIcon, IDataItem } from "../../shared/mocks/data"

interface IRender {
	container: Element,
	listener: (item: IDataItem, icon: HTMLElement) => void
}

export class Cards {

	private cards: IDataItem[];

	constructor(data: IDataItem[]) {
		this.cards = data
	}

	renderData({container, listener}: IRender) {
		this.cards.forEach(item => {
			const card = document.createElement('div')
			card.className = "weather-card"
			card.style.backgroundImage = `url(${getBackImg(item.img)})`
			container.append(card)
		  
			const icon = document.createElement('span')
			icon.id = item.id.toString()
			icon.className = "weather-card__icon"
			icon.style.backgroundImage = `url(${getIcon(item.icon)})`
			card.append(icon)
		  
			icon.addEventListener("click", function(e) {
			  listener(item, icon)
			})
		})
	}
}