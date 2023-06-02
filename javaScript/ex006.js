function botaoCalcular(){
    var nr = document.getElementById("nrDigitado").value
    var nr2 = document.getElementById("nrDigitado2").value

    var opSoma = nr + nr2 
    var opSubtracao = nr - nr2
    var opMultiplicacao = nr * nr2
    var opDivisão = nr/ nr2
    var opExponenciacao = nr ** nr2
    var opResto = nr % nr2
    document.getElementById("resultados").innerHTML =
    `${opSoma} ${opSubtracao} ${opMultiplicacao} ${opDivisão} ${opExponenciacao}
     ${opResto} `
}
    

