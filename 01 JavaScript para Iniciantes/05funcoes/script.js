// Crie uma função para verificar se um valor é Truthy


function verdadeiroFalso(dado) {
    return !!dado;
    }
console.log(verdadeiroFalso(undefined));



// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function areaQuadrado(lado){
    return lado * 4
}
console.log(areaQuadrado(8));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`  
}
console.log (nomeCompleto('Lucas', 'Teodoro'));


// Crie uma função que verifica se um número é par
function quantoDinheiro(dinheiro) {
    var modulo = dinheiro % 2;
    if (modulo === 0){
        return 'Essa quantia é par!';
    } else {
        return 'Essa quantia é impar!';
    } 
}
console.log(quantoDinheiro(11));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function nascimento(data){
    return typeof data;
}
console.log(nascimento(null));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function(){
    console.log('Lucas Teodoro A. Costa');
})


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log (precisoVisitar(20));
  console.log (jaVisitei(20));
  
  