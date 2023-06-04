input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    fahrzeug.turn_left(100)
    basic.pause(5000)
    fahrzeug.drive(-80, 0)
    basic.pause(5000)
    fahrzeug.stop()
})
let fahrzeug: l298.Vehicle = null
let motor1 = l298.create_motor(DigitalPin.P0, DigitalPin.P1, AnalogPin.C16)
let motor2 = l298.create_motor(DigitalPin.P2, DigitalPin.P3, AnalogPin.C17)
fahrzeug = l298.create_vehicle(motor1, motor2)
