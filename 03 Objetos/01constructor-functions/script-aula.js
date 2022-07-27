// const carro = {
//   marca: 'Marca',
//   preco: '0',
// };
/*
function Carro(marcaAtribuida, precoAtribuido){
   this.marca = marcaAtribuida;
   this.modelo = precoAtribuido;
   this.cor
   this.portas
   this.ano
   this.preco
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 2000);


function Carro2(marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.modelo = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);
*/

// const Dom = {
//   selecionar: 'li',
//   element(){
//     return document.querySelector(this.selecionar);
//   },
//   ativar(){
//     this.element().classList.add('ativar');
//   }
// }


function Dom (seletor) {
  this.element = function(){
    return document.querySelector(seletor);
  }
  this.ativar = function(){
    this.element().classList.add('ativar');
  }
}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');