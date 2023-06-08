
// monstro.js

class Monstro  {
  preload() {

  
    this.load.spritesheet('monstro','assets/monstro2.png',{frameWidth:16,frameHeight:16});
    this.load.image('blocos', 'assets/chao.png'); 
    
    
  } // fim da preload dentro da preload 

  create() {

      var monstro = this.physics.add.sprite(600,50,'monstro');
      monstro.setCollideWorldBounds(true);
      monstro.body.setSize(0,0,0,50);

      const p_teste = this.physics.add.staticGroup();
  
      let p_1 = p_teste.create(600, 100, 'blocos');
      p_1.setScale(1).refreshBody();

      this.physics.add.collider(p_teste, monstro);

  } // fim da create dentro da create

  update() {


  } // fim da update dentro da Monstro 
}

export default Monstro;// Monstro.js