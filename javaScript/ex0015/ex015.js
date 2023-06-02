function botaogerar() {
    var tabuada = document.getElementById("numero").value
    var multiplicador = 1
    document.getElementById("resultados").innerHTML = `tabuada do ${tabuada} <br>`
    while (multiplicador <= 10) {
        var resultado = multiplicador * tabuada
        document.getElementById("resultados").innerHTML += `<br> ${tabuada} x ${multiplicador} = ${resultado}`
        multiplicador++
    }
}

