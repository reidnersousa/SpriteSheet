// fase2.js

class MyScene extends Phaser.Scene {
  preload() {
    console.log("preload em MyScene");
    this.load.image('chao', 'assets/chao.png'); 
    this.load.image('fundo_2', 'assets/fundo_marte_2.png'); 
    this.load.spritesheet('personagem','assets/astronauta.png', { frameWidth:32.8, frameHeight:47.5 });
    this.load.spritesheet('vox_fase_2','assets/1.png',{frameWidth:15,frameHeight:15});
    
    
  }

  create() {
    console.log("create em MyScene");
    this.add.image(620, 300, 'fundo_2').setScale(2.0);
    const chao = this.physics.add.staticImage(397, 380, 'chao');
    chao.body.setSize(129, 46, 0, 0);

    const plataformas = this.physics.add.staticGroup();
  
    let plataforma1 = plataformas.create(270, 380, 'chao');
    plataforma1.setScale(1).refreshBody();
  
    let plataforma2 = plataformas.create(62, 380, 'chao');
    plataforma2.setScale(1).refreshBody();
  
    let plataforma3 = plataformas.create(65, 200, 'chao');
    plataforma3.setScale(1).refreshBody();
  
    let plataforma4 = plataformas.create(395, 200, 'chao');
    plataforma4.setScale(1).refreshBody();
  
    let plataforma5 = plataformas.create(525, 332, 'chao');
    plataforma5.setScale(1).refreshBody();
  
    let plataforma6 = plataformas.create(654, 332, 'chao');
    plataforma6.setScale(1).refreshBody();
  
    
    let plataforma7 = plataformas.create(654, 284, 'chao');
    plataforma7.setScale(1).refreshBody();
  
    let plataforma8 = plataformas.create(830, 427, 'chao');
    plataforma8.setScale(1).refreshBody();
    
    let plataforma9 = plataformas.create(1034, 262, 'chao');
    plataforma9.setScale(1).refreshBody();
  
    let plataforma10 = plataformas.create(654, 427, 'chao');
    plataforma10.setScale(1).refreshBody();
  
    let plataforma11 = plataformas.create(525, 427, 'chao');
    plataforma11.setScale(1).refreshBody();
  
    let plataforma12 = plataformas.create(270, 427, 'chao');
    plataforma12.setScale(1).refreshBody();
  
    let plataforma13 = plataformas.create(397, 427, 'chao');
    plataforma13.setScale(1).refreshBody();
  
    let plataforma14 = plataformas.create(61, 427, 'chao');
    plataforma14.setScale(1).refreshBody();
  
    let plataforma15 = plataformas.create(1040, 427, 'chao');
    plataforma15.setScale(1).refreshBody();
  
    let plataforma16 = plataformas.create(1167, 427, 'chao');
    plataforma16.setScale(1).refreshBody();
  
    let plataforma17 = plataformas.create(900, 350, 'chao');
    plataforma17.setScale(1).refreshBody();

    this.physics.add.collider(chao,personagem );
  
  
    var personagem = this.physics.add.sprite(100, 330, 'personagem');


    this.physics.add.collider(personagem, chao);
    this.physics.add.collider(plataformas, personagem);


     var vox_fase2 = this.physics.add.sprite(300, 350, 'vox_fase2');
  
    vox_fase2.setCollideWorldBounds(true);
    vox_fase2.body.setSize(0,0,0,40);
    this.physics.add.collider(chao,vox_fase2);
   
    this.physics.add.collider(plataformas,vox_fase2);
    
    
  this.vox_fase2 = vox_fase2;


     this.anims.create({
        key : 'parado',
        frames : this.anims.generateFrameNumbers('personagem', { start : 1, end : 3}),
        frameRate: 2,
        repeat : -1
      });

  this.anims.create({
        key : 'direita',
        frames : this.anims.generateFrameNumbers('personagem', { start : 11, end : 19}),
        frameRate: 10,
        repeat : -1
      });


  
   this.anims.create({
        

        key : 'esquerda',
        flipX :true,
        frames : this.anims.generateFrameNumbers('personagem', { start : 11, end : 19}),
        frameRate: 10,
        repeat : -1
      });

  this.anims.create({
        key : 'pulo',
        
        frames : this.anims.generateFrameNumbers('personagem', { start : 21, end : 23}),
        frameRate: 120,
        repeat : 1
      });


  
   


     
  this.personagem = personagem;

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


    
  }

  update() {




    let cursors = this.input.keyboard.createCursorKeys();
    var personagem = this.personagem;

    var vox_fase2 = this.vox_fase2;

    
    
    if(cursors.left.isDown){
       personagem.setVelocityX(-160);
       personagem.anims.play('esquerda', true);
       personagem.flipX = true;
       

    } else if(cursors.right.isDown){
       personagem.setVelocityX(160);
       personagem.anims.play('direita', true);
       personagem.flipX = false;
       

    }
    else if(cursors.up.isDown && personagem.body.onFloor()){
      
      personagem.setVelocityY(-160);
    
      
      
    }
    else if(cursors.down.isDown){
      personagem.setVelocity(0);
    }
    else if (cursors.space.isDown && personagem.body.onFloor()) {
      
      // primeiro pulo
      console.log("Primeiro pulo ");
      personagem.anims.play('pulo', true);
      personagem.setVelocityY(-300);
     
      if (cursors.space.isDown &&  personagem.jumpCount < 2)     {
      // segundo pulo
        
        personagem.setVelocityY(-400);
        console.log("Entrei no segundo espaço");
        personagem.jumpCount++;
      } 

      
    } 



      
    else
    { 
      personagem.setVelocityX(0);
      
      personagem.anims.play('parado',false);
      
    }


    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R).isDown && personagemVivo === false){
      console.log("Reviver");
    
      personagem.enableBody(true, 100, 330, true, true);
    }

  


  }
}






export default MyScene;// fase2.js
