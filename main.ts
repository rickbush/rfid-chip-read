let CHIP = ""
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.forever(function () {
    CHIP = serial.readString()
    basic.showString(CHIP)
})
