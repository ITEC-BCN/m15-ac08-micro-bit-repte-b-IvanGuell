input.onButtonPressed(Button.A, function on_button_pressed_a() {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    music.changeTempoBy(-20)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    music.setTempo(120)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    music.changeTempoBy(20)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    music.play(music.stringPlayable("D G B C E F A C5 ", 120), music.PlaybackMode.UntilDone)
})
