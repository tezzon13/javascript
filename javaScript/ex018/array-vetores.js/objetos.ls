var listaCarros = []

let carro = {
    ano : "2020"
    modelo:"gol"
    marca:"VW"
    }
    console.log(carro.ano +' - ' + carro.modelo)

    listaCarros.push(carro)

    console.log (listaCarros.length)

    carro = {
    ano : "2020"
    modelo:"onix"
    marca:"GM"
    }

    listaCarros.push(carro)
    console.log (listaCarros.length)

    for (var pos in listaCarros){
        console.log (listaCarros[pos].modelo)
    }