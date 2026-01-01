// pratica 1

const nota1 = 6;
const nota2 = 7;

const media = (nota1 + nota2) /2;


if (media >= 7) {
    console.log("PARABÉNS, VOCE FOI APROVADO!");
    console.log ("SUA MEDIA FOI: " + media);

}else if (media < 7 && media >= 5) {
    console.log("VOCÊ ESTÁ DE RECUPERAÇÃO!");
    console.log ("SUA MEDIA FOI: " + media);
}



// pratica 2

const valorproduto = 1002;
const fretegratis = true;

if (valorproduto >= 1000 && fretegratis === true) {
    console.log ("PARABÉNS, VOCÊ GANHOU FRETE GRÁTIS!");

}else {
    console.log ("Sera cobrado R$ 10,00 de frete.");
} 