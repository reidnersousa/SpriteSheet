// cenario/garrafas.js 
import { coletarGarrafas } from '../funcoes/funcoes.js';



export class Garrafas {
  static createGarrafas(scene, personagem,vox,monstros) {
    const garrafas_cenario = scene.physics.add.staticGroup();
    

    // ainda não ta usando 
   let garrafa1 = garrafas_cenario.create(400, 300, 'bandeira');
   garrafa1.setScale(0.1).refreshBody();
   
   let garrafa2 = garrafas_cenario.create(270, 300, 'bandeira');
   garrafa2.setScale(0.1).refreshBody();
  
    let garrafa3 = garrafas_cenario.create(500, 300, 'bandeira');
    garrafa3.setScale(0.1).refreshBody();
 
   


  

   // scene.physics.add.collider(personagem, garrafas_cenario);
    scene.physics.add.collider(vox, garrafas_cenario);

    // Corrigir o nome da variável para garrafas_cenario
    scene.physics.add.overlap(personagem, garrafas_cenario, coletarGarrafas, null, scene);

    return garrafas_cenario;
    
  }
}

export default Garrafas;

/*
 var pontuacao = 0;
  var pontuacaoTextBandeira = this.add.text(16, 16, 'Pontuação: 0', { fontSize: '32px', fill: '#000' });
  pontuacaoTextBandeira.setScrollFactor(0);
  pontuacaoTextBandeira.setOrigin(0, 0);

*/