function createDiv() {
    document.createElement("div").innerHTML = "je suis le nouveau"
}


function createInput () {
    let input = document.createElement("textarea")
}

function createLabel () {
    let myLabel = document.createElement("label")
    myLabel.innerHTML = "Votre texte"
}


function hello () {
    console.log("hello je viens du module")
}

const Numb = 15

export {Numb,createDiv}