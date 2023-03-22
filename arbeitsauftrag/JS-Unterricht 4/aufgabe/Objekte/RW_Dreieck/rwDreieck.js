function start() {
    var h = parseFloat(document.getElementById("hyp").value);
    var a = parseFloat(document.getElementById("katheteA").value);

    var objRWDreieck1 = new Dreieck(10, 6);
    var objRWDreieck2 = new Dreieck(h, a);
    document.write("<h2> Ergebnisse - Rechtwinkliges Dreieck</h2>");
    document.write("<h3> Eingaben</h3>");

    document.write("Hypotenuse = ", objRWDreieck2.hypotenuse, ", Kathete =  ", objRWDreieck2.katheteA);
    document.write("<h3> Ergebnisse</h3>");
    document.write("<br />Kathete b  =", objRWDreieck2.katheteB.toFixed(3));
    document.write("<br />Umfang  =", objRWDreieck2.umfang.toFixed(3));
    document.write("<br> ........");
}


class Dreieck {
    constructor(hypotenuse, katheteA) {
        this.hypotenuse = hypotenuse
        this.katheteA = katheteA
    }

    umfang = function berechneUmfang() {
        return hypotenuse + katheteA + katheteB
    }

    katheteB = function berechneKatheteB() {
        var ergebnis = Math.sqrt(Math.pow(this.hypotenuse, 2) - Math.pow(this.katheteA, 2));
        return ergebnis
    }

    fleache = function berehcneFlaeche() {
        return 0.5 * katheteA * hypotenuse
    }

    alpha = function berechneAlpha() {
        return Math.atan(katheteA / katheteB) * 180 / Math.PI
    }

    beta = function berechneBeta() {
        return 90 - alpha
    }
}