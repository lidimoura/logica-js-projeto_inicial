// Prática do curso de JS - Jogo do número secreto
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 3;
console.log('Valor do chute:'chute, numeroSecreto);
let chute = prompt ('Escolha um número entre 1 e 10');
//Se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso aí, você descobriu o número secreto ${numeroSecreto}!`);
} else {
    alert('Você errou :( tente novamente');
}
 