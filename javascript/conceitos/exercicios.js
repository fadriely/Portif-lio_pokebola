const { gets, print } = require ('./funcoes-auxiliares-ex1'); //gets comando de entrada e print comando de saída
//Nesta linha, estamos importando duas funções chamadas gets e print de um arquivo chamado funcoes-auxiliares-ex1.js.
//Essas funções serão usadas mais tarde para receber entradas (como notas) e imprimir mensagens na tela.

const media = gets();

if (media < 5){
    print('reprovado');
} else if (media >= 5 && media < 7){
    print('recuperação');
} else {
    print('aprovado');
}
