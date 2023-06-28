//inimigos/monstroGrupo.js
export class MonstroGrupo {
  
  constructor(scene) {
    this.scene = scene;
    this.monstros = scene.physics.add.group(); // Alteração para group
    this.i =0;
    this.escolha =true;
    
  }

  
  addMonstro(x, y, key) {
    const monstro = this.scene.physics.add.sprite(x, y, key);
    this.monstros.add(monstro);
  }
  moveMonstros(velocityX) {
    
    this.monstros.setVelocityX(velocityX);
   
    
  }
  collideMonstros() {
    this.monstros.getChildren().forEach((monstro) => {
      monstro.body.setCollideWorldBounds(true);
    });
  }
  collideMonstrosPlataformas(plataformas) {
   
    
    this.monstros.getChildren().forEach((monstro) => {
      this.scene.physics.add.collider(monstro, plataformas);
    });
  
  }
  collideMonstrosPersonagem(personagem) {
   
    
    this.monstros.getChildren().forEach((monstro) => {
      this.scene.physics.add.collider(monstro, personagem);
    });
  
  }
  
  playAnimation(animationKey) {
    
    
    this.monstros.children.each((monstro) => {
      monstro.anims.play(animationKey, true);
      monstro.flipX = (animationKey === 'vox_esquerda');
    });
  }

 
}