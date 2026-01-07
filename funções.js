// funções



function nome(){
    console.log ("Ola Suzana!");
    console.log ("Bem vinda ao curso de Lógica de Programação!");
}
nome();


function gererNumeroAleatorio(){
    console.log (Math.random());
}
    
gererNumeroAleatorio();

function gerarnumeroAleatorio(){
    return Math.random();
}
    let numeroGerado = gerarnumeroAleatorio();
console.log ("O numero gerado foi: " + numeroGerado);

function dataAtual(){
    const data = new Date();
    return data.toDateString();
}
const data = dataAtual();
console.log ("A data atual é: " + data);



