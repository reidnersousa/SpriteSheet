/// colocar as funções aqui 


//funcoes/funcoes.js

export function coletarGarrafas(personagem, bandeira ,pontuacao) {
    pontuacao += 100;
   // pontuacaoTextBandeira.setText('Pontuação: ' + pontuacao);
    console.log("ColetaGarrfas");
  
    if(pontuacao === 300){
        this.scene.add('Fase2', MyScene, true, { x: 400, y: 800 });
       
    }
    bandeira.destroy();
  }