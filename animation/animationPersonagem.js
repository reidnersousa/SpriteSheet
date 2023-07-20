//animationPersonagem.js
export class AnimationPersonagem {
  
  static createAnimations(scene) {

    scene.anims.create({
    key : 'parado',
    frames : scene.anims.generateFrameNumbers('personagem', { start : 1, end : 3}),
    frameRate: 2,
    repeat : -1
  });

  scene.anims.create({
    key : 'direita',
    frames : scene.anims.generateFrameNumbers('personagem', { start : 11, end : 19}),
    frameRate: 10,
    repeat : -1
  });
  scene.anims.create({
    key : 'esquerda',
    flipX :true,
    frames : scene.anims.generateFrameNumbers('personagem', { start : 11, end : 19}),
    frameRate: 10,
    repeat : -1
  });

  
    
  scene.anims.create({
    key : 'pulo',
    
    frames : scene.anims.generateFrameNumbers('personagem', { start : 20, end : 23}),
    frameRate: 10,
   
    repeat : 0
  });
  
  scene.anims.create({
    key :'morte',
    frames :scene.anims.generateFrameNumbers('personagem',{start:46,end:52}),
    frameRate :10,
    repeat :-1
  })
    
  }
}