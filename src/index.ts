import { Cards } from './components/Cards/Cards'
import { VolumeInput } from './components/VolumeInput/VolumeInput'
import { data, IDataItem } from './shared/mocks/data'
import { renderElem } from './shared/helpers/renderElem'
import { pausePlayAudio } from './shared/listeners/pausePlayAudio'
import { handleRangeInput } from './shared/listeners/rangeListener'
import './index.scss'

const root = document.querySelector('#app')

const container = renderElem("div", root, "weather-container")
const weatherContainer = renderElem("div", container, "weather-container-elems")
const body = document.querySelector('body')

let audio: HTMLAudioElement;
let currentAudioId: number; 
let volumeRange = "50";

const pausePlayAudioListener = (item: IDataItem, icon: HTMLElement) => {
    const res = pausePlayAudio({item, icon, audio, currentAudioId, volumeRange, body});
    audio = res.audio;
    currentAudioId = res.currentAudioId; 
};

const handleRangeInputListener = (e: Event) => {
  volumeRange = handleRangeInput(e, volumeRange, audio).volumeRange
}

const cards = new Cards(data)
cards.renderData({container: weatherContainer, listener: pausePlayAudioListener})

const audios = new VolumeInput()
audios.render({container, volumeRange, listener: handleRangeInputListener})






