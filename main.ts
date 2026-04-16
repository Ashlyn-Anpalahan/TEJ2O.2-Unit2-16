/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Apr 2026
 * This program uses a bluetooth radio.
*/

// variables
let distance = 0

// setup
radio.setGroup(9)
basic.showIcon(IconNames.Happy)

// button a
input.onButtonPressed(Button.A, function () {
    while (true) {
        distance = sonar.ping(DigitalPin.P8, DigitalPin.P12, PingUnit.Centimeters)

        // distance is less than 10
            if (distance < 10) {
                basic.clearScreen()
                radio.sendString("Too Close")
                basic.showIcon(IconNames.No)
                basic.pause(1000)

            } else {
                basic.clearScreen()
                basic.showNumber(distance)
                basic.showIcon(IconNames.Yes)
                basic.pause(1000)
            }  
    }
})
