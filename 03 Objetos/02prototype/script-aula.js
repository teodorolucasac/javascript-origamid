function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function(){
    return 'Abraçou';
  }
  this.andar = function(){
    return 'Andou pelo objeto'
  }
}

Pessoa.prototype.andar = function(){
  return this.nome +  ' Pessoa andou';
}
Pessoa.prototype.nadar = function(){
  return this.nome +  ' Pessoa nadou';
}

const lucas = new Pessoa('Lucas', 28);

// console.log(Pessoa.prototype)
// console.log(lucas.prototype)

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['cachorro', 'gato', 'cavalo'];
