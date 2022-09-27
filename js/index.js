import { timer } from "./timer.js"
import { sounds } from "./sounds.js"
import { controls } from "./Controls.js"
import { events } from "./events.js"
import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton,
} from "./elements.js"

// module functions 

const Sounds = sounds()

const Controls = controls({
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton,
})
const Timer = timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: Controls.pause
})
events({ Controls, Timer, Sounds }) 