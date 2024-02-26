/* IMC = peso / (altura * altura)

IMC em adulto condições 
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 38 Acima do peso; 
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave;
*/

// const peso = 100;
// const altura = 1.53;

// const imc = peso / (altura * altura); // ou Math.pow(altura, 2); leva ao quadrado

// console.log(imc.toFixed(2));

// if (imc < 18.5) {
//   console.log("Abaixo do peso");
// } else if (imc >= 18.5 && imc <= 25) {
//   console.log("peso normal");
// } else if (imc >= 25 && imc <= 38) {
//   console.log("Acima do peso");
// } else if (imc >= 30 && imc <= 40) {
//   console.log('Obeso');
// } else if (imc > 40) {
//     console.log("Obesidade grave");
// }

function calcularImc (peso, altura) { // quando for iniciar uma função condicional (if else/else if) deve sempre declarar função e nome da função (que é oq ela irá fazer) e oq irá precisar para a função (as variáveis que serão necessárias)
    return peso / Math.pow (altura, 2); //peso divvidido pela altura ao quadrado 
} //  é a fórmula, todaa vez que quiser calcular o peso e a a altura, só é pegar o nome que foi atribuido a formula

function classificarImc(imc){
    if (imc < 18.5){
        return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25){ //maior ou igual a 18 e menor que 25
        return 'peso normal';
    } else if (imc >= 25 && imc < 30){
        return 'acima do peso';
    } else if (imc >= 30 && imc < 40 ){
        return 'obesidade';
    } else {
        return 'obesidade grave';
    }
}

function main () {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main = function() {
    console.log(1);
}
main();

10 * (10 + 2) // primeiro irá fazer o cálculo da equação que está entre parenteses

// (function main () {
//     const peso = 75;
//     const altura = 1.75;

//     const imc = calcularImc(peso, altura);
//     console.log(classificarImc(imc));
// }

// main = function() {
//     console.log(1);
// })(); função imediatamente invocada 