//animation.js
export class AnimationMonstro {
  static createAnimations(scene) {
    scene.anims.create({
      key: 'parado',
      frames: scene.anims.generateFrameNumbers('personagem', { start: 1, end: 3 }),
      frameRate: 2,
      repeat: -1
    });

    scene.anims.create({
      key: 'direita',
      frames: scene.anims.generateFrameNumbers('personagem', { start: 11, end: 19 }),
      frameRate: 10,
      repeat: -1
    });

    scene.anims.create({
      key: 'esquerda',
      frames: scene.anims.generateFrameNumbers('personagem', { start: 11, end: 19 }),
      frameRate: 10,
      repeat: -1,
      flipX: true
    });
  }
}