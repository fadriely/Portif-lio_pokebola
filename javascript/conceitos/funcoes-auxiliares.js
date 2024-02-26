const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7]
let i = 0; 
//A variável i é inicializada com o valor 0. Ela será usada como um contador para controlar a posição atual na lista de entradas.

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto)
}

module.exports = { gets, print };