/// colocar as funções aqui 

import MyScene from '../fase2.js';

//funcoes/funcoes.js

var pontuacao =0;

export function coletarGarrafas(personagem, bandeira  ,pontuacaoTextBandeira) {
    pontuacao += 100;
    pontuacaoTextBandeira.setText('Pontuação: ' + pontuacao);
    console.log("ColetaGarrfas");
    console.log(pontuacao);
    if(pontuacao === 1000){
        console.log("Garrafas");
        //this.scene.start('Fase2');
       this.scene.add('Fase2', MyScene, true, { x: 400, y: 800 });
       
    }
    bandeira.destroy();
  }


var quantidadeTiros = 4;

export function pegarMunicao(personagem, cartucho, pegouCartuchos) {
  cartucho.disableBody(true, true); // Remover o cartucho do jogo
  pegouCartuchos = true; // Definir pegouCartuchos como true
  quantidadeTiros += 2; // Aumentar a quantidade de tiros em 2

  //tem que arrumar a funcão de update das municoes
  console.log("Municao coletado. Quantidade de tiros:", quantidadeTiros);

  // Recarregar o cartucho
  cartucho.enableBody(true, 700,380, true, true);
  cartucho.setScale(0.05);

  return quantidadeTiros,pegouCartuchos;
}
