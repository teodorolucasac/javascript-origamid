const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerTexto = ([...elements]) => {
  return elements.map(element => element.innerText);
}

console.log(elementsInnerTexto(cpfsList));

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerTexto(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  })
}

substituirCPFS(cpfsList)
