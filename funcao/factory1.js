// Função Factory : função que retorna um objeto

// Factory simples
function criarPessoa(){
    return{
        nome: 'Maria',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())