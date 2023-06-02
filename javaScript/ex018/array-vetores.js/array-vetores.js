//criando um array vazio
var meuVetor = []
// criando vetores com dados 
var numeros = [4,1,8,5,2,7]
var nomes = ['Silvia , Marcos, Sandra,']
var novoVetor = [ 20,'Sesi',"Sandra"]
// Acessando os dados de um vetor 
console.log ( nomes )
console.log (novoVetor[1])
var frutas = [ 'Maça , Laranja ,Pera,Morango ']
for (var i = 0; i <= frutas .length; i ++){
    //coloco i o no indice da frutas para pegar o 
    // valor de cada indice do vetor 
    for (var pos in frutas){
        console.log(frutas[pos])
    }
    
    console.log (frutas [i])
    //adicionando novo valor no final do vetor 
    frutas.push('Abacaxi')
}   for (var i = 0; i <= frutas .length; i ++)
console.log (frutas [i])
var novalistafrutas = []
novalistafrutas.push('limão')
novalistafrutas.push('melancia')
console.log(novalistafrutas)
//modificando o valor de um indice no valor
novalistafrutas[0] = 'melão'
console.log(novalistafrutas)

//para cada elemento do meu vetor 
frutas.forEach (  item => {
    console.log('item pelo forEach ', item)
})

frutas.forEach (  item ,indice ) => {
    console.log('item pelo forEach ', indice, item)
}