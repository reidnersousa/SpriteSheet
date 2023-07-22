// cenario/garrafas.js 
import { coletarGarrafas } from '../funcoes/funcoes.js';

export class Garrafas {

 

  static createGarrafas(scene, personagem, vox, monstros, pontuacaoTextBandeira) { 
    const garrafas_cenario = scene.physics.add.group(); // Change to physics group

    let garrafa1 = scene.physics.add.sprite(20, 150, 'bandeira');
    garrafa1.setScale(0.08);
    garrafas_cenario.add(garrafa1); 

    let garrafa2 = scene.physics.add.sprite(200, 150, 'bandeira');
    garrafa2.setScale(0.08);
    garrafas_cenario.add(garrafa2); 

    let garrafa3 = scene.physics.add.sprite(830, 150, 'bandeira');
    garrafa3.setScale(0.08);
    garrafas_cenario.add(garrafa3); 


    let garrafa4 = scene.physics.add.sprite(200, 200, 'bandeira');
    garrafa4.setScale(0.08);
    garrafas_cenario.add(garrafa4); 

    let garrafa5 = scene.physics.add.sprite(400, 200, 'bandeira');
    garrafa5.setScale(0.08);
    garrafas_cenario.add(garrafa5); 

    let garrafa6 = scene.physics.add.sprite(830, 200, 'bandeira');
    garrafa6.setScale(0.08);
    garrafas_cenario.add(garrafa6); 

    let garrafa7 = scene.physics.add.sprite(830, 200, 'bandeira');
    garrafa7.setScale(0.08);
    garrafas_cenario.add(garrafa7); 


  
     scene.physics.add.overlap(personagem, garrafas_cenario, (personagem, bandeira) => {
      coletarGarrafas.call(scene, personagem, bandeira, pontuacaoTextBandeira);
    });
     

   
    
    // Enable gravity for each bottle in the group
    garrafas_cenario.getChildren().forEach(garrafa => {
      garrafa.body.setGravityY(300);
    });

    return garrafas_cenario;
  }
}

