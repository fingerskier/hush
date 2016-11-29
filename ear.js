var midi = require('midi')
var readline = require('readline')

var input = new midi.input()
var user = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

var numPorts = input.getPortCount()
var portName = input.getPortName(0)

console.log(numPorts, portName)

input.on('message', (delta_T, message)=>{
	console.log(`d: ${delta_t}`)
	console.log(`m: ${message}`)
})

input.openPort(0)

while (true) {}

// user.question('Quit? ', (answer)=>{
// 	input.closePort()
// 	process.exit()
// })

