function calculateLevel() {
    let temp = prompt("Temperatur eingeben")
    alert(`Höhe: ${30000 - 300 * temp}`)
}

function calculateCar() {
    console.log("aufgerufen")
    let benzinPreis = parseFloat(document.getElementById("benzin").value)
    let verbrauch = parseFloat(document.getElementById("verbrauch").value)
    let strecke = parseFloat(document.getElementById("strecke").value)
    alert(`Preis: ${strecke * (verbrauch / 100) * benzinPreis}`)
}

function taschenrechner() {
    let ergebnis
    let one = parseInt(document.getElementById("one").value)
    let two = parseInt(document.getElementById("two").value)
    console.log(document.getElementById("operation").value)
    switch (document.getElementById("operation").value) {
        case "+":
            console.log("plus")
            ergebnis = one + two
            break
        case "-":
            console.log("minus")
            ergebnis = one - two
            break
        case "*":
            console.log("mal")
            ergebnis = one * two
            break
        case "/":
            console.log("geteilt")
            ergebnis = one / two
            break
        default:
            console.log("default")
            ergebnis = 0
            break;
    }
    document.getElementById("ergebnis").innerText = ergebnis
}