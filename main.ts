input.onGesture(Gesture.Shake, function () {
    reply = randint(1, 4)
    if (reply == 1) {
        basic.showString("NO")
    } else if (reply == 2) {
        basic.showString("YES")
    } else if (reply == 3) {
        basic.showString("MAYBE")
    } else {
        basic.showString("ASK AGAIN")
    }
})
let reply = 0
basic.showString("ASK A QUESTION")
