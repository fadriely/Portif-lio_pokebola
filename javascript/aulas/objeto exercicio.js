// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro { // As classes sempre começam com letras maiúsculas. class sempre no singular
    marca;
    cor; 
    gastoCombustivelPorKm;

    constructor(marca, cor, gastoCombustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelPorKm = gastoCombustivelPorKm;
    }

    calcularGastoDePercurso(distaanciaEmKm, precoCombustivel) {
        return distaanciaEmKm * this.gastoCombustivelPorKm * precoCombustivel // para calcular o valor do percurso precisa da distânciakm o gastoCombustivelPorKm que já foi cálculado sendo ele 0.08333333333333333 e o Preço do combustível 
    }
};

const onix = new Carro('Chevrolet', 'Cinza', 1/12); // Percorre 12 km utilizando 1 litro, o preço médio dele se dá pelo 
const palio = new Carro('Fiat', 'preto', 1/10 )     //cálculo de 1/ pelo km que se faz com 1 litro 
                                                    // Consigo adicionaar outro carro sem precisar codar mais linhas
console.log(onix);
console.log(onix.calcularGastoDePercurso (70, 5));

