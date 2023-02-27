function getCalendar() {
    let days = document.getElementById("days")
    let calendar = document.getElementById("calendar").innerHTML
    for (let index = 0; index < array.length; index++) {
        calendar = "Kalender"
    }
}

function teich() {
    let max = document.getElementById("maximale Anzahl")
    var jahre = 0
    var fische = 3
    while (fische < max) {
        jahre++;
        fische *= 2
    }
    console.log("Wir haben zu viele Fische!")
}