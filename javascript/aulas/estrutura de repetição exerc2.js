const numeros = []

numeros.push(1);
numeros.push(2);
numeros.push(3);
numeros.push(4);
numeros.push(5);
numeros.push(6);
numeros.push(7);
numeros.push(8);
numeros.push(9);
numeros.push(10);

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0){
        console.log(numero);
    }
}


// const numerosPares = [];

// for (let i = 0; i < 10; i = i + 2) {
//     numerosPares.push(i);
// }

// console.log(numerosPares);

// const numeros = [];

// for (let i = 0; i < 10; i++) {
//     numeros.push(i);
// }

// console.log(numeros);