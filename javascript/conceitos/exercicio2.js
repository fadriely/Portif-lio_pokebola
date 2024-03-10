const {gets, print } = require ('./funcoes-auxiliares-ex2')

const n = gets(); // let e const são uma das declarações de variáveis, são apllicadas dependendo do depende do comportamento que você deseja para essa variável
                // n o número de elementos que se vai receber
let maiorNumeroPar = null; // Essas variáveis serão usadas para acompanhar o maior número par e o menor número ímpar encontrados, respectivamente
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {

    const numero = gets();
    if (numero % 2 === 0) { //verificando se o número lido é par ou ímpar usando o operador % (módulo). Se o resto da divisão por 2 for igual a 0, o número é par; caso contrário, é ímpar.
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    
    } else {
      if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        } else if (numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
        
    }
}

print('maior numero par é: ' + maiorNumeroPar);
print('menor numero impar é: ' + menorNumeroImpar);


// const N = gets();
// let maiorNumeroPar = 0;
// let menorNumeroImpar = Infinity;


// for (let i = 0; i < N; i++) {
//   const numero = parseInt(gets());


//   if (numero % 2 == 0) {
//     if (numero > maiorNumeroPar) {
//       maiorNumeroPar = numero;
//     }
//   } else {
//     if (numero < menorNumeroImpar) {
//       menorNumeroImpar = numero
//     }
//   }
//   // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
// }


// print('Maior número par: ' + maiorNumeroPar);
// print('Menor número impar: ' + menorNumeroImpar);
// // TODO: Imprima as saídas conforme o enunciado deste desafio.

