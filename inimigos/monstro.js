
// monstro.js

export class Monstro  {
  static createMonstro(scene){

  const monstros = scene.physics.add.staticGroup();

  var vox2 = scene.physics.add.sprite(10, 150, 'vox');
  monstros.add(vox2);
 
  var vox3 = scene.physics.add.sprite(620, 230, 'vox');
  monstros.add(vox3);

  //voxMovimentosDireita(vox2);
  vox2.anims.play('vox_direita', true);
  vox2.flipX = false;
  

 

  }

}
