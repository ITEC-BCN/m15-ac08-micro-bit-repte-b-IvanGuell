input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltRight, function () {
    music.changeTempoBy(-20)
})
input.onGesture(Gesture.Shake, function () {
    music.setTempo(120)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.changeTempoBy(20)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("D G B C E F A C5 ", 120), music.PlaybackMode.UntilDone)
})
