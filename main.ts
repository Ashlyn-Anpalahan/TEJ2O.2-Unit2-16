/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Apr 2026
 * This program uses a bluetooth radio.
*/

// variables
let distance = 0

// setup
radio.setGroup(5)
basic.showIcon(IconNames.Happy)

// button a
basic.forever (function () {
    distance = sonar.ping(DigitalPin.P8, DigitalPin.P12, PingUnit.Centimeters)
    if (distance < 10) {
        radio.sendString("Too Close")
        basic.pause(500)
    }
})

// reciever
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})
