
    /*
    comentarios em 
    multiplas linhas
    */
   // comentario em uma unica linha
   // o alert é utulizado para exibir uma mensagem em popup

     //alert('Olá mundo!!!!')
     // no console conseguimos visualizar informaçoes sem exibir na pagina 
     console.log('ola mundo estou utilizando os console')

     console.error('esta e uma mensagem de erro')

     console.warn('esta e uma mensagem de alerta')
     console.info('esta e uma mensagem de informacao')

     function botao1(){
        alert( 'voce clicou no botao1')
     }

     function botao2(){
        alert( 'voce clicou no botao2')
     }

     function botao3(){
        alert( 'voce clicou no botao3 ')
     }

     function botaocorfundo(){
        document.body.style.backgroundColor = 'red'
     }
     function botaonome(){
         var nome2 = prompt('qual seu nome?')
         confirm ( 'ola' + nome2 +', entendeu variavel?')

     }

     // declarando variaiveis 
     // string - conjunto de caracteres - declarar com '' ou " "
     var nome = 'ana'
     var sobrenome = 'tezzon'
     // number todo numero em js é do tipo number 
     // declarar sem ""
     var idade = 16 
     //Boolean - Somente recebe true e false
     var aprovado = true 

     // comando typeof para saber o tipo do dado 
     console.log (typeof nome  )
     // concatenando strings com o + 
     console.log  ( nome  + ' ' + sobrenome )
      var n1 = 10 
      var n2 = 15 
      // ira somar as 2 variaveis number (25)
      console.log(n3 + n4)
      // se ultilizarmos o + com string ele concatena se 
      // ultilizar number soma de outra variavel 
      n1 = n2 
      consol.log("n1 = " + ' e o n2 = ' + n2 )

      // para atribuir um valor decimal ultilizamos o . e nao a , 
      var salario = 1290.85
      // posso tambem somar a variavel com ela msm 
      salario = salario + 200 
      console.log(salario)

      // antigamente para juntar texto e variaveis faziamos assim 
      console.log('ola ,' + nome + 'voce tem' + idade + 'anos')
      // hoje ultilizamos o templastesSring forma mais simples 
      console.log(`ola,$ {nome}voce tem $ {idade} anos`)

      function botaosomar(){
         var nr1 = prompt("digite um numero:")
         var nr2 = prompt("digite outro numero:")

         //console.log(typeof nr1)

         //var soma = nr1 + nr2 
         //alert (soma)
   
      //convertendo a variavel valor1 e o 2 de string para number 
         nr1 = parseFloat(nr1) 
         nr2 = Number(nr2)

      //console.log(typeof nr1)

     var soma = nr1 + nr2 

      //alert (soma)
      document.getElementById("res-soma").innerHTML +=
     `<br>A soma de ${nr1} + ${nr2} = ${soma}`
}

function botaocidade(){
   var cidade = document.getElementById("cidade").value
   document.getElementById("resultadoCidade").innerHTML += `<br> o nome da cidade ${cidade}`
   }
   //Operadores Aritméticos e Ordem de precedencia
   var opSoma = 5 + 2 //Operador de soma +
   console.log(opSoma) // 7
   var opSubtracao = 5 - 2 //Operador de subtração -
   console.log(opSubtracao) // 3
   var opMultiplicacao = 5 * 2 //Operador de mutiplição *
   console.log(opMultiplicacao) // 10
   var opDivisão = 5 / 2 //Operador de divisão /
   console.log(opDivisão) // 2.5
   var opExponenciacao = 5 ** 2 //Operador de exponenciação **
   console.log(opExponenciacao) // 25
   var opResto = 5 % 2 //Operador de resto da divisão %
   console.log(opResto) // 1
   //Ordem de precedencia
   var ordemPrecedencial1 = 5 + 3 / 2
   console.log(ordemPrecedencial1) // 6.5
   var ordemPrecedencial2 = (5 + 3) / 2
   console.log(ordemPrecedencial2) // 4
   /* 1º()
      2º **
      3º * /
      4º %
      5º + -
   */
 //Constantes - o valor não pode ser alterado depois de atribuído
 const pi = 3.14  

 //pi = 3 - Se o valor for alterado dará erro no Javascript
 if(media>= 7 )

 // para sortearmos um valor aleatorio ultilizamos o marh.random()
 // o math.random retorna um numero decimal e precisamos multiplicar pelo nr 
 // o parseint ultilizamos para obter apenas a parte inteira do numero
 var nrsorteando = parseInt(math.random ()*100)
 console.log(nrSorteado)

 // switch case 
 // e como se fosse varios if else de forma mais simples 
 var (diaSemana) = 3 
 witch(diaSemana){
   case 1 :
      console.log("Hoje e : Domingo")
      break // para o Switch case e não verifica as outras opções 
      case 2 :
      console.log("Hoje é: Segunda ")
      break 
      case 3 :
      console.log("Hoje e : Terça")
      break 
      case 4 :
      console.log("Hoje e : Quarta")
      break 
      case 5 :
      console.log("Hoje e : Quinta")
      break 
      case 6 :
      console.log("Hoje e : Sexta")
      break 
      case 7 :
      console.log("Hoje e : Sábado")
      break 
   default:
      console.log("Dia invalido")
 }
 // for- laço de repetiçao 
 for(var i = 1; i <= 10; i++){
   alert(i)
 }

 var contador = 1 
 while (contador<= 10 )
 