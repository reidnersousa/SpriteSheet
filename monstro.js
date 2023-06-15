
// monstro.js

class Monstro  {
  preload() {

  
    this.load.spritesheet('monstro','assets/monstro2.png',{frameWidth:16,frameHeight:16});
    this.load.image('blocos', 'assets/chao.png'); 
    
    
  } // fim da preload dentro da preload 

 create() {
  var randomX = Phaser.Math.Between(100, 700); // Posição horizontal aleatória
  var randomY = Phaser.Math.Between(100, 500); // Posição vertical aleatória

  var monstro = this.physics.add.sprite(randomX, randomY, 'monstro');
  monstro.setCollideWorldBounds(true);
  monstro.body.setSize(0, 0, 0, 50);

  const p_teste = this.physics.add.staticGroup();

  let p_1 = p_teste.create(randomX, randomY + 50, 'blocos');
  p_1.setScale(1).refreshBody();

  this.physics.add.collider(p_teste, monstro);
}
  update() {


  } // fim da update dentro da Monstro 
}

export default Monstro;// Monstro.js