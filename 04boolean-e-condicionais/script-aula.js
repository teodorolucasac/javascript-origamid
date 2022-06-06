var possuiGraduacao = false;
var possuiDoutorado = true;


if (possuiGraduacao) {
    console.log('É verdadeiro');
    var x = 10
} else if(possuiDoutorado) {
    console.log('Possui Doutorado');
} else {
    console.log('Não possui nada');
}

var nome = '10kg' / 10;

if(nome) {
    console.log(nome);
} else {
    console.log('Nome não existe');
}


if (!possuiGraduacao) {
    console.log('Não possui graduação')
}



var corFavorita = 'Verde';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    case 'Verde':
        console.log('Olhe para a floresta');
        break;
    default:
        console.log('Feche os olhos.');
}