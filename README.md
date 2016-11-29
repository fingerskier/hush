# hush
WAAPI sandbox


## Analog workflow
1. Create a context
2. Create sourcese
3. Create filters/processors effectors
4. Choose a destination
5. Connect sources to effects, effects to destination

Sources & destinations can have 1+ channels.

Sources:
- analog node (e.g. oscillator)
- raw PCM data
- media markup elements
- WebRTC MediaStream


Sampling = coverting continuous signal to discrete value(s)

Buffer(numChannels, length, rate)
	frame_time = numFrames / sampleRate
	planar format ~ alternating L/R channels per byte (N channels)
		LLLLLLLRRRRRRRRLLLLLLLLRRRRRRRR



### MIDI Message Format
STATUS byte
	TYPE nibble
	CHANNEL nibble
DATA byte
DATA byte


![newt.phys.unsw.edu.au](http://newt.phys.unsw.edu.au/jw/graphics/notesinvert.GIF)

AHBCIDJEFKGL