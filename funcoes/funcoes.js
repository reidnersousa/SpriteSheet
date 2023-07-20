/// colocar as funções aqui 

import MyScene from '../fase2.js';

//funcoes/funcoes.js

var pontuacao =0;

export function coletarGarrafas(personagem, bandeira  ,pontuacaoTextBandeira) {
    pontuacao += 100;
   // pontuacaoTextBandeira.setText('Pontuação: ' + pontuacao);
    console.log("ColetaGarrfas");
    console.log(pontuacao);
    if(pontuacao === 300){
        console.log("Garrafas");
        //this.scene.start('Fase2');
       this.scene.add('Fase2', MyScene, true, { x: 400, y: 800 });
       
    }
    bandeira.destroy();
  }