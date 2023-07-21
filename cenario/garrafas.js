// cenario/garrafas.js 
import { coletarGarrafas } from '../funcoes/funcoes.js';

export class Garrafas {
  static createGarrafas(scene, personagem, vox, monstros) {
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

  

    scene.physics.add.overlap(personagem, garrafas_cenario, coletarGarrafas, null, scene);

    // Enable gravity for each bottle in the group
    garrafas_cenario.getChildren().forEach(garrafa => {
      garrafa.body.setGravityY(300);
    });

    return garrafas_cenario;
  }
}

