// Municao.js
import { pegarMunicao } from '../funcoes/funcoes.js';

// 
export class Municao {
  static createMunicao(scene, personagem) {
    const municaoGrupo = scene.physics.add.group();

  
    let municao1 = scene.physics.add.sprite(600,380, 'cartucho');
    municao1.setScale(0.05);
    municaoGrupo.add(municao1);

    let municao2 = scene.physics.add.sprite(700, 380, 'cartucho');
    municao2.setScale(0.05);
    municaoGrupo.add(municao2);

   scene.physics.add.collider(personagem, municaoGrupo, pegarMunicao, null, scene);

    return municaoGrupo;
  }
}


