let start = 0
let stop = 0
input.onButtonPressed(Button.B, function () {
    basic.turnRgbLedOff()
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.pause(randint(1000, 2000))
    start = input.runningTime()
    basic.setLedColor(0x00ff00)
    while (!(input.buttonIsPressed(Button.A))) {
    	
    }
    stop = input.runningTime()
    basic.showNumber((stop - start) / 1000)
    basic.turnRgbLedOff()
})
