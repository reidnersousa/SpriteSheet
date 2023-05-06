function preload() {
 
 
this.load.spritesheet('personagem','assets/astronauta.png', { frameWidth:32.8, frameHeight:47 });
this.load.image('chao', 'assets/chao.png'); 
this.load.image('fundo', 'assets/MarteFundo.png'); 
this.load.image('vox','assets/1.png');
}

function create() {
  //===============================
  this.add.image(620,300,'fundo').setScale(3.0);
 // fundo.setSize(1.5);
  
  const plataformas = this.physics.add.staticGroup();
  let plataforma1 = plataformas.create(270, 380, 'chao');
  plataforma1.setScale(1).refreshBody();

  let plataforma2 = plataformas.create(62, 380, 'chao');
  plataforma2.setScale(1).refreshBody();

  let plataforma3 = plataformas.create(62, 200, 'chao');
  plataforma3.setScale(1).refreshBody();

  let plataforma4 = plataformas.create(405, 200, 'chao');
  plataforma4.setSize(5, 5).setScale(1).refreshBody();

  let plataforma5 = plataformas.create(562, 300, 'chao');
  plataforma5.setScale(1).refreshBody();

  let plataforma6 = plataformas.create(690, 300, 'chao');
  plataforma6.setScale(1).refreshBody();

  let plataforma7 = plataformas.create(690, 252, 'chao');
  plataforma7.setScale(1).refreshBody();


  

  


  //================================
  
  const chao = this.physics.add.staticImage(397, 380, 'chao');
  
  chao.body.setSize(129, 46, 0, 0);
  this.physics.add.collider(chao,personagem );
  
  var personagem = this.physics.add.sprite(100, 330, 'personagem');
  

  personagem.setCollideWorldBounds(true);

  this.physics.add.collider(personagem, chao);

  this.physics.add.collider(plataformas, personagem);
 
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

}

function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    var personagem = this.personagem;
    
    if(cursors.left.isDown){
       personagem.setVelocityX(-160);
       personagem.anims.play('esquerda', true);
       personagem.flipX = true;

    } else if(cursors.right.isDown){
       personagem.setVelocityX(160);
       personagem.anims.play('direita', true);
       personagem.flipX = false;

    }
    else if(cursors.up.isDown){
      
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
      //console.log('AAA');
      personagem.anims.play('parado',false);
    }
    //if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    //else this.player.setVelocityX(0);
    //if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    //else this.player.setVelocityY(0);
}

const config = {
    type: Phaser.AUTO, // Canva ou WebGL
    width: 1200,
    height: 400,
    backgroundColor: '#FFF',
    autoCenter : Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 500
            },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);