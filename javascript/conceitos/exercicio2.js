const {gets, print } = require ('./funcoes-auxiliares-ex2')

const n = gets(); // let e const são uma das declarações de variáveis, são apllicadas dependendo do depende do comportamento que você deseja para essa variável
// n o número de elementos que se vai receber
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {

    const numero = gets();
    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        } else if (numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
      
    }
}

print('maior numero par é: ' + maiorNumeroPar);
print('menor numero impar é: ' + menorNumeroImpar);


