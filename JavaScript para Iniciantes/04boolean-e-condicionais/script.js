// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 27;
var irmaoIdade = 29;
var sobrinhaIdade = 2;

if (minhaIdade > irmaoIdade) {
    console.log('É maior!');
} else if (minhaIdade === irmaoIdade) {
    console.log('É igual!');
} else {
    console.log('É menor!');
}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//3 -> retorna o ultimo verdadeiro ou primeiro falso. Sendo certo que 5 - string com espaço é 5
console.log(expressao);



// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);



// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
console.log(china - brasil + ' milhões')

if (brasil > china) {
    console.log(`Brasil tem ${brasil} - ${china} milhões de pessoas a mais que a China.`);
} else {
    console.log(`Brasil tem ${china} - ${brasil} milhões de pessoas a menos que a China.`);
} //deu errado somar os valores, vou aprender dps.



// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//falso



// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//Cão
