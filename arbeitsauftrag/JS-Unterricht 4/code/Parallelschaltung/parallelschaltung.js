class Parallelschaltung {
    constructor(spannung, w1, w2) {
        this.spannung = spannung
        this.w1 = w1
        this.w2 = w2
    }

    gesamtWiderstand = function berechne() {
        return (w1 + w2) / (w1 * w2)
    }

    leistung = function berechne() {
        return i * u
    }

    strom = function berechne() {
        return gesamtWiderstand / spannung
    }
}