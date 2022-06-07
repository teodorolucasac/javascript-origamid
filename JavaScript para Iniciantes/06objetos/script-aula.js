var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
  }
  
  console.log(pessoa.nome); // 'André'
  console.log(pessoa.possuiFaculdade); // true
  


  var quadrado = {
    lados: 4,
    area(lado) {
      return lado * lado;
    },
    perimetro(lado) {
      return this.lados * lado;
    },
    cinco(){
        return 5;
    },
  }
  
  quadrado.lados; // 4
  console.log(quadrado.area(5)); // 25
  console.log(quadrado.perimetro(5)); // 20
  
  console.log(Math.random());

  var height=100;
  var menu = {
      width: 800,
      height: 50,
      backgroundColor: '#84E',
      metadeHeight() {
          return this.height / 2;
      }
  }

  menu.backgroundColor = '#000';
  menu.color = 'blue';
  var bg = menu.backgroundColor;

  menu.esconder = function() {
      console.log('Escondido');
  }