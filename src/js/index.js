/*
OBJETIVO 1 - QUANDO clicarmos na seta de avanaçr temos que mostrar o próximo cartão da lista 
- passo 1 - dar um jeito de pegar o elemento html da seta avançar 
- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar 
- passo 3 0 fazer aparecer o próximo cartão da lista 
- passo 4 - buscar o cartão que esta seleceionado e esconder




OBJETIVO 2 - QUANDO clicarmos na seta de voltar temos que mostrar o  cartão  anterior da lista 
- passo 1 - dar um jeito de pegar o elemento html da seta voltar 
- passo 2 - dar um jeito de identificar o clique do usuário na seta voltar 
- passo 3  fazer aparecer o anterior cartão da lista 

- passo 4 - buscar o cartão que esta seleceionado e esconder 




OBJETIVO 1 - QUANDO clicarmos na seta de avanaçr temos que mostrar o próximo cartão da lista 
- passo 1 - dar um jeito de pegar o elemento html da seta avançar 
- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar 
- passo 3 0 fazer aparecer o próximo cartão da lista 
- passo 4 - buscar o cartão que esta seleceionado e esconder pokébola
MapaDev Week
seta voltar
*/
//- passo 1 - dar um jeito de pegar o elemento html da seta avançar
const btvAvancar = document.getElementById('btn-avacar');
let cartaoAtual = 0;
//- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar 
btvAvancar.addEventListener('click', function(){

    

    //- passo 3 - fazer aparecer o próximo cartão da lista 
    const cartoes = document.querySelectorAll('.cartao');

    cartaoAtual++;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add('selecionado');

    //-passo 4 - buscar o cartão que esta seleceionado e esconder
    const cartaoSelecionado = document.querySelector('selecionado');
   cartaoSelecionado.classList.remove('selecionado');

});
