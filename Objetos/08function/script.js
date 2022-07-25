// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) =>{
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  elemento.classList.add(classe);

  return elemento;
}

console.log(criarElemento('li', 'azul', 'esse é o conteudo'))



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titutlo = criarElemento.bind(null, 'h1', 'titulo');

const cursosJS = h1Titutlo('Cursos de JavaScript')
const cursosHTML = h1Titutlo('Cursos de HTML')

console.log(cursosJS, cursosHTML)