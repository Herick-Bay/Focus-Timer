import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonMoretime,
    buttonLessTime,
    forestButton,
    rainButton,
    coffeeButton,
    fireplaceButton,
} from "./elements.js"
//Actions    
export function events({ Controls, Timer, Sounds }) {
    buttonPlay.addEventListener('click', function () {
        Controls.Play()
        Timer.countdown()
        Sounds.buttonpress()
    })
    buttonPause.addEventListener('click', function () {
        Controls.pause()
        Timer.pauseDisplay()
        Sounds.buttonpress()
    })
    buttonSet.addEventListener('click', function () {
        Timer.setTime()
        Sounds.buttonpress()
    })
    buttonStop.addEventListener('click', function () {
        Timer.reStar()
        Controls.pause()
        Sounds.buttonpress()
    })
    buttonMoretime.addEventListener('click', function () {
        Controls.addfive()
        Sounds.buttonpress()
    })
    buttonLessTime.addEventListener('click', function () {
        Controls.Lessfive()
        Sounds.buttonpress()
    })

    //soundpad actions
    forestButton.addEventListener(`click`, function () {
        Sounds.forest()
        Sounds.playSoundForest()
        Sounds.buttonpress()
    }
    )
    rainButton.addEventListener(`click`, function () {
        Sounds.rain()
        Sounds.playSoundRain()
        Sounds.buttonpress()
    }
    )
    coffeeButton.addEventListener(`click`, function () {
        Sounds.coffee()
        Sounds.playSoundCooffee()
        Sounds.buttonpress()
    })
    fireplaceButton.addEventListener(`click`, function () {
        Sounds.fireplace()
        Sounds.playSoundFireplace()
        Sounds.buttonpress()
    }
    )
}