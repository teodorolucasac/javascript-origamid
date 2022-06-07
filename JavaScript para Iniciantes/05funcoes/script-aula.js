function areaQuadrado(lado) {
  return lado * lado;
}

console.log (areaQuadrado(10));



function pi() {
  return 3.14;
}

var total = 5 * pi ();

console.log(pi());
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura)
  return imc;
}

console.log(imc(80, 1.8));



function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
  return 'Eu gosto de mato';
} else {
  return 'Eu não gosto de cores';
}
}


addEventListener('click', function(){
  console.log('Oi');
});

addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima


function imc2(peso, altura) {
  const imc = peso / (altura ** 2)
  console.log(imc);
}

imc2(82, 1.85);

function terceiraIdade(idade) {
  console.log(typeof idade);
  if(typeof idade !== 'number'){
    return 'Por favor preencha um número!'
  } else if(idade >=60){
    return true;
  } else {
    return false;
  }
  
}

console.log(terceiraIdade(60))

var totalPaises = 193;
function faltaVisitar(paisesVisitados){

  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

console.log(totalPaises);



var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

