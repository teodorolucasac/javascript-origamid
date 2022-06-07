'use strict'

var carro = 'Fusca';
function mostrarCarro() {
    console.log(carro);
  }
  
  mostrarCarro(); // Fusca no console
  console.log(carro); // Erro, carro is not defined
  

  if(true){
      const mes = 'Dezembro';
      console.log(mes);
  }

  //console.log(mes);

  {
    var carro2 = 'Fusca 2';
    const ano = 2018;
  }
  console.log(carro2); // Carro
  // console.log(ano); // erro ano is not defined
  
  let i = 50;
  /*for (let i = 0; i<10; i++){
      console.log(`Número ${1}`);
  }*/

  console.log(i);

const semana = 'Sexta';
//semana = 'Quinta'
//const semana = 'Quinta';

console.log(semana);
  

const data = {
    ano: 2018,
    mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 21;


