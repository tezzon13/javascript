function botaoverificar(){
    var nome = document.getElementById("nome").value
    var nome = document.getElementById("idade").value
    if (idade >= 18) {
        document.getElementById("resultados").innerHTML = ` Pode Tirar`
    }

       if (idade < 18){
        document.getElementById("resultados").innerHTML = `Não Pode Tirar`
       }
    
}