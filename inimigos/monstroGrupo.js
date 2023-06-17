//inimigos/monstroGrupo.js
export class MonstroGrupo {
  constructor(scene) {
    this.scene = scene;
    this.monstros = scene.physics.add.staticGroup();
  }

  addMonstro(x, y, key) {
    const monstro = this.scene.physics.add.sprite(x, y, key);
    this.monstros.add(monstro);
  }

  playAnimation(animationKey) {
    this.monstros.children.each((monstro) => {
      monstro.anims.play(animationKey, true);
      monstro.flipX = false;
    });
  }
}
