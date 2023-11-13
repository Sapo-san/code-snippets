/*
    Libreria JQuery
    se invoca con $()

    Docs: https://api.jquery.com/
*/

var counter = 0

$("#textInput").on("input", function (event) {
    
    // Obtener valor del elemento input
    let currentValue = event.target.value

    // Seteamos el texto del label
    $("#thatOneLabelElement").text("Current input value: " + currentValue)
})

$("#textInput").on("blur", function() {

    // Creamos un elemento con información del evento
    let newElement = document.createElement("label")
    newElement.innerText = `Unfocus event: ID ${counter} | Value: ` + $("#textInput").val()
    newElement.id = counter
    counter++
    console.log("Next blur ID:", counter)

    // Agregamos elemento al doc con Jquery
    $("body").append(newElement)
})