
import {
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton,
} from "./elements.js"

export function sounds(
) {
    // lets used in sounds
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true%22")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true%22")
    const forestSound = new Audio("./sounds/Floresta.wav")
    const fireplaceSound = new Audio("./sounds/Lareira.wav")
    const coffeeSound = new Audio("./sounds/Cafeteria.wav")
    const rainSound = new Audio("./sounds/Chuva.wav")
    // butonns custom
    function resetCustom() {
        forestButton.classList.remove(`custom-svg`)
        rainButton.classList.remove(`custom-svg`)
        coffeeButton.classList.remove(`custom-svg`)
        fireplaceButton.classList.remove(`custom-svg`)
    }
    function forest() {
        resetCustom()
        forestButton.classList.add(`custom-svg`)
    }
    function rain() {
        resetCustom()
        rainButton.classList.add(`custom-svg`)
    }
    function coffee() {
        resetCustom()
        coffeeButton.classList.add(`custom-svg`)
    }
    function fireplace() {
        resetCustom()
        fireplaceButton.classList.add(`custom-svg`)
    }
    //sounds controls
    let forestSoundPlay = true
    let rainSoundPlay = true
    let coffeeSoundPlay = true
    let fireplacePlay = true
    // reset sounds controls
    function controlsReset() {
        forestSoundPlay = true
        rainSoundPlay = true
        coffeeSoundPlay = true
        fireplacePlay = true
    }
    function audioAllpause() {
        rainSound.pause()
        coffeeSound.pause()
        fireplaceSound.pause()
        forestSound.pause()
    }
    //active sound for press button
    function buttonpress() {
        buttonPressAudio.play()
    }
    function endSound() {
        kitchenTimer.play()
    }
    function playSoundForest() {
        if (forestSoundPlay) {
            controlsReset()
            forestSoundPlay = false
            audioAllpause()
            forestSound.play()
        }
        else {
            forestSoundPlay = true
            forestSound.pause()
            resetCustom()
        }
    }
    function playSoundRain() {
        if (rainSoundPlay) {
            controlsReset()
            rainSoundPlay = false
            audioAllpause()
            rainSound.play()
        }
        else {
            rainSoundPlay = true
            rainSound.pause()
            resetCustom()
        }
    }
    function playSoundCooffee() {
        if (coffeeSoundPlay) {
            controlsReset()
            coffeeSoundPlay = false
            audioAllpause()
            coffeeSound.play()
        }
        else {
            coffeeSoundPlay = true
            coffeeSound.pause()
            resetCustom()
        }
    }
    function playSoundFireplace() {
        if (fireplacePlay) {
            controlsReset()
            fireplacePlay = false
            audioAllpause()
            fireplaceSound.play()
        }
        else {
            fireplacePlay = true
            fireplaceSound.pause()
            resetCustom()
        }
    }
    return {
        playSoundForest,
        playSoundRain,
        playSoundCooffee,
        playSoundFireplace,
        buttonpress,
        endSound,
        forest,
        rain,
        coffee,
        fireplace,
    }
}