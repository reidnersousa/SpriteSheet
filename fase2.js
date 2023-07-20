// fase2.js

class MyScene extends Phaser.Scene {
  preload() {
    console.log("preload em MyScene");
    this.load.image('chao_2', 'assets/chao.png'); 
    this.load.image('fundo_2', 'assets/fase2.png'); 
    this.load.spritesheet('personagem_2','assets/astronauta_laranja.png', { frameWidth:32.8, frameHeight:47.5 });
    this.load.spritesheet('vox_fase2','assets/monstro.png',{frameWidth:16,frameHeight:16});
    this.personagem_2 = null;
    
  } // fim da preload dentro da preload 

  create() {
    
     console.log("create em MyScene");

    const fundoFixo = this.add.image(620, 300, 'fundo_2').setScale(2.9);
    const chao_2 = this.physics.add.staticImage(397, 380, 'chao_2');
    chao_2.body.setSize(129, 46, 0, 0);

    // Configura o deslocamento da câmera para (0, 0)
    this.cameras.main.setScroll(0, 0);

    // Ajusta a posição do plano de fundo fixo
    fundoFixo.setScrollFactor(0);

    const plataformas = this.physics.add.staticGroup();

    let plataforma1 = plataformas.create(270, 380, 'chao_2');
    plataforma1.setScale(1).refreshBody();
  
    let plataforma2 = plataformas.create(62, 380, 'chao_2');
    plataforma2.setScale(1).refreshBody();
  
    let plataforma3 = plataformas.create(65, 200, 'chao_2');
    plataforma3.setScale(1).refreshBody();
  
    let plataforma4 = plataformas.create(395, 200, 'chao_2');
    plataforma4.setScale(1).refreshBody();
  
    let plataforma5 = plataformas.create(525, 332, 'chao_2');
    plataforma5.setScale(1).refreshBody();
  
    let plataforma6 = plataformas.create(654, 332, 'chao_2');
    plataforma6.setScale(1).refreshBody();
  
    
    let plataforma7 = plataformas.create(654, 284, 'chao_2');
    plataforma7.setScale(1).refreshBody();
  
    let plataforma8 = plataformas.create(830, 427, 'chao_2');
    plataforma8.setScale(1).refreshBody();
    
    let plataforma9 = plataformas.create(1034, 262, 'chao_2');
    plataforma9.setScale(1).refreshBody();
  
    let plataforma10 = plataformas.create(654, 427, 'chao_2');
    plataforma10.setScale(1).refreshBody();
  
    let plataforma11 = plataformas.create(525, 427, 'chao_2');
    plataforma11.setScale(1).refreshBody();
  
    let plataforma12 = plataformas.create(270, 427, 'chao_2');
    plataforma12.setScale(1).refreshBody();
  
    let plataforma13 = plataformas.create(397, 427, 'chao_2');
    plataforma13.setScale(1).refreshBody();
  
    let plataforma14 = plataformas.create(61, 427, 'chao_2');
    plataforma14.setScale(1).refreshBody();
  
    let plataforma15 = plataformas.create(1040, 427, 'chao_2');
    plataforma15.setScale(1).refreshBody();
  
    let plataforma16 = plataformas.create(1167, 427, 'chao_2');
    plataforma16.setScale(1).refreshBody();
  
    let plataforma17 = plataformas.create(900, 350, 'chao_2');
    plataforma17.setScale(1).refreshBody();

    var personagem_2 = this.physics.add.sprite(100, 330, 'personagem_2');
    this.personagem_2 = personagem_2;

    this.physics.add.collider(chao_2, personagem_2);
    this.physics.add.collider(plataformas, personagem_2);

    var vox_fase2 = this.physics.add.sprite(300, 350, 'vox_fase2');
    this.vox_fase2 = vox_fase2;

    this.physics.add.collider(chao_2, vox_fase2);
    this.physics.add.collider(plataformas, vox_fase2);

    vox_fase2.setCollideWorldBounds(false);
    vox_fase2.body.setSize(0, 0, 0, 40);

  this.anims.create({
        key : 'direita',
        frames : this.anims.generateFrameNumbers('personagem_2', { start : 11, end : 19}),
        frameRate: 10,
        repeat : -1
      });

   this.anims.create({
        key : 'esquerda',
        flipX :true,
        frames : this.anims.generateFrameNumbers('personagem_2', { start : 11, end : 19}),
        frameRate: 10,
        repeat : -1
      });

  this.anims.create({
        key : 'pulo',
        frames : this.anims.generateFrameNumbers('personagem_2', { start : 21, end : 23}),
        frameRate: 120,
        repeat : 1
      });

    this.anims.create({
        key : 'vox_esquerda',
        frames : this.anims.generateFrameNumbers('vox_fase2', { start : 4, end : 8}),
        frameRate: 15,
        repeat : -1
      });

  this.anims.create({
        key : 'vox_direita',
        frames : this.anims.generateFrameNumbers('vox_fase2', { start : 8, end : 15}),
        frameRate: 15,
        repeat : -1
      });

    this.cameras.main.startFollow(personagem_2);
  this.cameras.main.setZoom(0.8); // Define o zoom da câmera para 80% do tamanho original
  this.cameras.main.setFollowOffset(-100, 0); // Afasta a câmera 100 pixels para a esquerda

     
  } // fim da create dentro da create

  update() {

    



let cursors = this.input.keyboard.createCursorKeys();
    var personagem_2 = this.personagem_2;

    if (personagem_2.y > this.sys.game.config.height) {
      console.log("Personagem caiu");
      personagem_2.enableBody(true, 100, 330, true, true);
    }
    
    if ((cursors.space.isDown || cursors.up.isDown) && (personagem_2.body.onFloor() || personagem_2.jumpCount < 2)) {
    personagem_2.setVelocityY(-250);
    personagem_2.anims.play('pulo', true);
    personagem_2.jumpCount++;
  }
    if(cursors.left.isDown){
       personagem_2.setVelocityX(-160);
       personagem_2.anims.play('esquerda', true);
       personagem_2.flipX = true;
       

    } else if(cursors.right.isDown){
       personagem_2.setVelocityX(160);
       personagem_2.anims.play('direita', true);
       personagem_2.flipX = false;
       

    }
    else if(cursors.up.isDown && personagem_2.body.onFloor()){
      
      personagem_2.setVelocityY(-250);

    }
    else if(cursors.down.isDown){
      personagem_2.setVelocity(0);
    }
    else if (cursors.space.isDown && personagem_2.body.onFloor()) {
      
      // primeiro pulo
      console.log("Primeiro pulo ");
      personagem_2.anims.play('pulo', true);
      personagem_2.setVelocityY(-250);
     
      if (cursors.space.isDown &&  personagem_2.jumpCount < 2)     {
      // segundo pulo
        
        personagem_2.setVelocityY(-400);
        console.log("Entrei no segundo espaço");
        personagem_2.jumpCount++;
      } 

      
    } 
      
    else
    { 
      personagem_2.setVelocityX(0);
      
      personagem_2.anims.play('parado',false);
      
    }


    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R).isDown && personagemVivo === false){
      console.log("Reviver");
    
      personagem_2.enableBody(true, 100, 330, true, true);
    }

  } // fim da update dentro da MyScene 
}






export default MyScene;// fase2.js