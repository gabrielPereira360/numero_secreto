function validaChute(chute){
    const numero = +chute;
    if(numeroInvalido(numero)){
        if (chute.toUpperCase() === 'GAME OVER'){

            document.body.innerHTML = `
                <img class="gif" src="https://i.pinimg.com/originals/57/61/5b/57615b8c0092a66c1d4058b1692955cc.gif" alt="Pato andando" />
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="btn-refresh" class="btn"><i class="fa-solid fa-rotate-right"></i></button>
            `;
        }else{
            elementoChute.innerHTML += `
            <div>Valor inválido!</div>
            `; 
        }
    }else if(numeroDentroIntervalo(numero)){
        elementoChute.innerHTML += `<div>Valor fora do intervalo!</div>`;
    }else if(numero > randoNumber){
        condicao = 1;
        atualizaTexto(condicao);
    }else if(numero < randoNumber){
        condicao = 2;
        atualizaTexto(condicao);
    }else if (numero == randoNumber){
        condicao = 3;
        atualizaTexto(condicao);
    }
}

function numeroInvalido(numero) {
    return Number.isNaN(numero);
}


function numeroDentroIntervalo(numero){
    return numero > maiorValor || numero < menorValor;
}

function atualizaTexto(condicao){
    if(condicao === 1){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `;
        return;

    }else if (condicao === 2){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `;
        return;
    }else if (condicao === 3){
        document.body.innerHTML = `
        <img class="gif" src="https://i.gifer.com/origin/fd/fdf70f5f4989f9c08f033da50c38170e_w200.gif" alt="Gato voando e soltando arco iris" />
        <h2>Parabéns você acertou! <i class="fa-solid fa-check"></i></h2>
        <h3>O número secreto era ${randoNumber}</h3>
        <button id="btn-refresh" class="btn"><i class="fa-solid fa-rotate-right"></i></button>
        `;
        return;
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'btn-refresh'){
        window.location.reload();
    }
});
