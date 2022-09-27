import { sounds } from "./sounds.js"
export function timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {
    let PauseStart
    let minutes
    function updateDisplay(Minutes, Seconds) {
        minutesDisplay.textContent = String(Minutes).padStart(2, "0")
        secondsDisplay.textContent = String(Seconds).padStart(2, "0")
    }
    function countdown() {
        PauseStart = setTimeout(
            function () {
                let Minutes = Number(minutesDisplay.textContent)
                let Seconds = Number(secondsDisplay.textContent)

                updateDisplay(Minutes, 0)

                if (Minutes <= 0 && Seconds <= 0) {
                    reStar()
                    sounds().endSound()
                    resetControls()
                    return
                }
                if (Seconds <= 0) {
                    Seconds = 3
                    Minutes = Minutes - 1
                }

                updateDisplay(Minutes, Seconds - 1)
                countdown()
            }
            , 1000)
    }
    function pauseDisplay() {
        clearTimeout(PauseStart)
    }
    function setTime() {
        minutes = prompt("Quantos minutos ?")
        if (isNaN(minutes)) {
            alert("Somente números")
            setTime()
            return
        }
        if (Number(minutes >= 60)) {
            minutes = "60"
            secondsDisplay.textContent = "00"
        }
        minutesDisplay.textContent = String(minutes.padStart(2, "0")) || 0
    }
    function reStar() {
        if (minutes == null) {
            minutes = 25
            secondsDisplay.textContent = "00"
        }
        minutesDisplay.textcontent = Number(minutesDisplay.textContent = String(minutes).padStart(2, "0"))
        secondsDisplay.textContent = String(secondsDisplay.textContent = 0).padStart(2, "0")
        pauseDisplay()

    }
    return {
        updateDisplay,
        countdown,
        pauseDisplay,
        setTime,
        reStar
    }
}