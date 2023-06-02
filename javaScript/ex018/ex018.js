function botaogerar(){
    var inicio = document.getElementById(`numero`).value
    inicio = Number (inicio)
    for (var numero = 1; numero <= inicio; numero++)
    document.getElementById("resultados").innerHTML += `<img src="../imagem/coracao-grande1-a7b6b0d1f637ab34c516218798780132-640-0.png.jpg" alt="">`
}