// Aqui, estamos importando as funções gets() e print() do módulo 
//funcoes-auxiliares. A função gets() geralmente é usada para obter entrada no 
//formato de strings, e a função print() é usada para imprimir saída.
const { gets, print } = require('./funcoes-auxiliares');                                           

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {             
    const numeroSorteado = gets();        
    numerosSorteados.push(numeroSorteado) 
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) { //Uma variável maiorValor é inicializada com o valor 0 para armazenar o maior valor encontrado no array numerosSorteados.
    const numeroSorteado = numerosSorteados[i];     //Um loop for é usado para iterar sobre os elementos do array numerosSorteados.
    if (numeroSorteado > maiorValor) {              //Em cada iteração, o valor atual é comparado com o maiorValor. Se o valor atual for maior, ele substitui o maiorValor.
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);

//Importar (usando 'require') e exportar (com 'module.exports') 