export function controls({
    minutesDisplay,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
}) {
    function Play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }
    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')

    }

    function addfive() {
        if (minutesDisplay.textContent >= 60) {
            minutesDisplay.textContent = String(60).padStart(2, "0")
            return
        }
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
        return
    }
    function Lessfive() {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
        if (minutesDisplay.textContent <= 0) {
            minutesDisplay.textContent = String(0).padStart(2, "0")
            return
        }
    }
    return {
        Play,
        pause,
        addfive,
        Lessfive,
    }
}

