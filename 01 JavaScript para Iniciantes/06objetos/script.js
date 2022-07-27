// Crie um objeto com os seus dados pessoais

// Deve possui pelo menos duas propriedades nome e sobrenome

var pessoa = {
    nome: 'Lucas',
    sobreNome: 'Teodoro',
    idade: 27,
    cidade: 'Uberlândia',
    cabelo: 'Preto',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
/*var mostrarNome = {
    return pessoa.nome, pessoa.sobreNome
}*/
pessoa.nomeCompleto = function(){
    return `${this.nome} ${this.sobreNome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
 carro.preco = 3000; 
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem'){
            return 'Latir'
        } else {
            return 'Balança o rabo'
        }
    }
  }