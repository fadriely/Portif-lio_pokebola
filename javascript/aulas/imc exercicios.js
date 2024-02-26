class Pessoa { //definindo classe Pessoa. toda classe se inicia com lletra maiúscula
    nome;     //há 3 propriedades
    peso;
    altura;

    constructor(nome, peso, altura){ // um construtor, que é um método especial utilizado para criar e inicializar objetos criados a partir dessa classe.
        this.nome = nome;          //parâmetros atribui esses valores às propriedades correspondentes da instância da classe
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){    //------------método------------
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){ //--------no fim esse método será chamadp ----------
        const imc = this.calcularImc(); // irá calcullar a partir da fórmula, 
        if (imc < 18.5){
            return 'abaixo do peso';
        } else if (imc >= 18.5 && imc < 25){ //maior ou igual a 18 e menor que 25
            return 'peso normal'
        } else if (imc >= 25 && imc < 30){
            return 'acima do peso';
        } else if (imc >= 30 && imc < 40 ){
            return 'obesidade';
        } else {
            return 'obesidade grave';
        }
    }
}

//Criação de Instâncias da Classe Pessoa

const jose = new Pessoa ('jose', 70, 1.75);
console.log(jose.classificarImc());
const adry =new Pessoa ('Adry', 50, 1.55);
console.log(adry.classificarImc());