function botaosortearmes(){
    var nome = document.getElementById("nome").value
    var mesSorteado = parseInt(Math.random() * 13)
    
    switch(mesSorteado){
        case 1 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Janeiro`
             break

        case 2 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Fevereiro`
            break 

        case 3 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Março`
           break

        case 4 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Abril`
           break

        case 5 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Maio`
          break   

        case 6 : 
        document.getElementById("resultados").innerHTML = `${nome}, voce vai ficar solteira até Junho`
           break

        case 7 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Julho`
           break

        case 8 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Agosto`
           break

        case 9 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Setembro`
           break

        case 10 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Outubro`
           break

        case 11 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Novembro`
          break

        case 12 : 
        document.getElementById("resultado").innerHTML = `${nome}, voce vai ficar solteira até Dezembro`
          break 

     default:
        document.getElementById("resultado").innerHTML = `${nome}, voce nao vai ficar solteira `
    }
}