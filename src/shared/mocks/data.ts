export interface IDataItem {
  id: number;
  img: "summer" | "rainy" | "winter";
  icon: "sun" | "rain" | "snow" | "pause" | "play";
  audio: "sun" | "rain" | "snow" ;
}

export const data: IDataItem[] = [
  { id: 1, img: 'summer', icon: 'sun', audio: 'sun' },
  { id: 2, img: 'rainy', icon: 'rain', audio: 'rain'  },
  { id: 3, img: 'winter', icon: 'snow', audio: 'snow'  },
]

export const imgUrls = {
  summer: require("../../../public/assets/images/summer-bg.jpg"),
  rainy: require("../../../public/assets/images/rainy-bg.jpg"),
  winter: require("../../../public/assets/images/winter-bg.jpg"),
}
export const iconUrls = {
  sun: require("../../../public/assets/icons/sun.svg"),
  rain: require("../../../public/assets/icons/cloud-rain.svg"),
  snow: require("../../../public/assets/icons/cloud-snow.svg"),
  pause: require("../../../public/assets/icons/pause.svg"),
  play: require("../../../public/assets/icons/play.svg"),
}

export const audioUrls = {
  sun: require("../../../public/assets/sounds/summer.mp3"),
  rain: require("../../../public/assets/sounds/rain.mp3"),
  snow: require("../../../public/assets/sounds/winter.mp3"),
}

export const getBackImg = (key: keyof typeof imgUrls) => {
  return imgUrls[key]
}
export const getIcon = (key: keyof typeof iconUrls) => {
  return iconUrls[key]
}
export const getAudio = (key: keyof typeof audioUrls) => {
  return audioUrls[key]
}



