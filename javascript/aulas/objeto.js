    // const pessoa = { // Cria uma constante chamada pessoa que armazena um objeto.
    //     nome: 'Adriely P Ferreira', // menbros de u objeto
    //     idade: 19, // A propriedade idade do objeto tem o valor 19.
    
    //     descrever: function () { // descrever: function () { ... }: A propriedade descrever é uma função anônima (método) que imprime informações sobre a pessoa
    //        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); // O this é utilizado para se referir ao próprio objeto pessoa.
    //     }
    // };
    
    // pessoa.descrever();
    

    class pessoa { 
        nome;
        idade;
        anoDeNascimento; 

        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
            this.anoDeNascimento = 2024 - idade;
        }
        
        descrever () { 
           console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
        }
    };
    
    const adri = new pessoa('Adri', 19);
    const renan = new pessoa('Renan', 30);

    adri.descrever();
    renan.descrever();

    console.log(adri);
    console.log(renan);