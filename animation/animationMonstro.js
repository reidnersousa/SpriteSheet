//animation.js
export class AnimationMonstro {
  static createAnimations(scene) {

    scene.anims.create({
    key : 'vox_esquerda',
    flipX:true,
    frames : this.anims.generateFrameNumbers('vox', { start : 1, end : 11}),
    frameRate:10,
    repeat : -1
  });

  scene.anims.create({
    key : 'vox_direita',
    frames : this.anims.generateFrameNumbers('vox', { start : 1,end:13}),
    frameRate: 10,
    repeat : -1
  });
    
  }
}