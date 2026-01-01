//3 = P*i*n
/*

3 = juros;
P = valor inicial;
I = taxa de juros 0.03 = 3%
N = tempo (meses)
*/

const P = 2000;
const I = 0.03;
const N = 12;

const jurosFinal = P * I * N;
console.log( `O valor dos juros no periodo de ${N} meses é de R$ ${jurosFinal}`);