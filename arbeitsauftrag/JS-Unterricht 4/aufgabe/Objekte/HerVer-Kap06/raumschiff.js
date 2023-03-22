function Raumschiff(name, modell) {
    this.name = name;
    this.modell = modell;
}

var enterprise = new Raumschiff("U.S.S. Enterprise", "NCC-1701");
var voyager = new Raumschiff("U.S.S. Voyager", "NCC-74656");

document.write("<br />", enterprise.name, ", Modell:  ", enterprise.modell);
document.write("<br />", voyager.name, ", Modell:  ", voyager.modell);