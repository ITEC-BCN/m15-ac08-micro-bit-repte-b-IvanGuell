

def on_button_pressed_a():
    music._play_default_background(music.built_in_playable_melody(Melodies.FUNERAL),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.A, on_button_pressed_a)


def on_gesture_tilt_right():
    music.change_tempo_by(-20)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)


def on_gesture_shake():
    music.set_tempo(120)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)


def on_gesture_tilt_left():
    music.change_tempo_by(20)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)


def on_button_pressed_b():
    music.play(music.string_playable("D G B C E F A C5 ", 120),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.B, on_button_pressed_b)
