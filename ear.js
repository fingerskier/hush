var midi = require('midi')

var input = new midi.input()

var numPorts = input.getPortCount()
var portName = input.getPortName(0)

console.log()

input.on('message', (delta_T, message)=>{
	console.log(`d: ${delta_t}`)
	console.log(`m: ${message}`)
})

input.openPort(0)

input.closePort()
