const menorValor = 0;
const maiorValor = 100;
const randoNumber = gerarNumeroAleatorio(); 

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Numero secreto:', randoNumber);

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
