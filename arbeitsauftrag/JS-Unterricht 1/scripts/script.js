let form = document.getElementById("form")
form.onsubmit(getVars)

/**
 * Function that gets all the Vars
 */
function getVars() {
    let name = document.getElementById("nameField")
    let firstName = document.getElementById("firstNameField")
    let age = document.getElementById("ageField")
    let average = document.getElementById("averageField")
    let second = document.getElementById("secondField")
    let music = document.getElementById("musicField")
    console.log(name)
    document.write(name + firstName + age + average + second + music)
}