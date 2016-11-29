var midi = require('midi')

var output = new midi.output()

var numPorts = output.getPortCount()

var portName = output.getPortName()

output.openPort(0)

output.sendMessage([176,22,1])

output.closePort()
