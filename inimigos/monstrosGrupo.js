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
  collideMonstrosTiro(tiro) {
   
    this.monstros.getChildren().forEach((monstro) => {
      
      this.scene.physics.add.collider(monstro, tiro);
    });
  
  }
  
  disablePersonagem(personagem,matarVox){
    this.monstros.getChildren().forEach((monstro) =>{
      
      this.scene.physics.add.overlap(personagem, monstro, matarVox, null, this);
      
    });
  }


  


  disableMonstro(tiro) {
  this.monstros.getChildren().forEach((monstro) => {
    this.scene.physics.add.overlap(tiro, monstro, (tiro, monstro) => {
      acertaTiroM(monstro);
    }, null, this);
  });
  }
  
  playAnimation(animationKey) {
    
    
    this.monstros.children.each((monstro) => {
      monstro.anims.play(animationKey, true);
      monstro.flipX = (animationKey === 'vox_esquerda');
    });
  }
 

 
}


 

function acertaTiroM(monstro) {
    monstro.disableBody(true,true);
   console.log("Colidem");
} 