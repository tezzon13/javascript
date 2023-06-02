var listausuario = []


listausuario = JSON.parse(localStorage.getItem('bdusuario'))
if (listausuario == null) {
    listausuario = []
}

console.log(listausuario)

function validarCadastro(login, senha,) {
    if (login != '' && senha != '' ) {
        return true
    } else {
        return false
    }
}

function entrar() {

    var usuario= document.getElementById("login").value
    var senha = document.getElementById("senha").value
    
     var encontrou = false 
     listausuario.forEach( item =>){
        if(usuario == item.login && senha == item.senha){
            alert(`Bem vindo ao sistema, ${item.nome}`)
            encontrou = true 
        }
     }


    //var possoCadastrar = validarCadastro( usuario, senha)
    //if (possoCadastrar == false) {
        //alert("Verifique se há espaços em branco!!")
        //return
    //} else (possoCadastrar == true)
   // {
        //alert(`Você conseguiu entrar`)
    //}

    var usuario = {
        login: usuario,
        senha: senha 

       
    }
    listausuario.push(usuario)
    //Utilizando o localStorage que irá gravar o nosso vetor de filmes no método setItem, preciso passar
    //como parâmetro o nome do espaço que o navegador irá reservar e passo também o vetor de filmes
    //convertido em formato JSON
    localStorage.setItem( 'bdusuario', JSON.stringify(listausuario))


    document.getElementById("login").value = ``
    document.getElementById("senha").focus()
}


function cadastrar(){
    location.href = 'ex026.html'
}


