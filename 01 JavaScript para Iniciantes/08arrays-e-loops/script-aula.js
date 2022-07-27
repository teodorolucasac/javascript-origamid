for (var numero = 0; numero <= 10; numero++) {
    console.log(numero);
  }
  // Retorna de 0 a 10 no console
  

  var i = 0;
  while (i <= 50) {
    console.log(i);
    i = i + 5;
  }


  var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

  for (var item = 0; item < videoGames.length; item++){
      console.log(videoGames[item]);
      if (videoGames[item] === 'PS4'){
          break;
      }
  }

  var frutas = ['banana', 'pera', 'maça', 'abacaxi', 'uva',];

  frutas.forEach (function(item) {
      console.log(frutas);
  })