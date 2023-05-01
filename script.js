function preload() {
 
 
this.load.spritesheet('personagem','assets/astronauta.png', { frameWidth:32.8, frameHeight:47 });
this.load.image('chao', 'assets/chao.png'); 
}

function create() {
  

  
  const chao = this.physics.add.staticImage(420, 380, 'chao');
  
  chao.body.setSize(129, 46, 0, 0)
  this.physics.add.collider(chao,personagem );

  var personagem = this.physics.add.sprite(100, 330, 'personagem');

  personagem.setCollideWorldBounds(true);

  this.physics.add.collider(personagem, chao);


 
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
    else if (cursors.space.isDown && personagem.body.onFloor()) {
      
      // primeiro pulo
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
    //if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    //else this.player.setVelocityX(0);
    //if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    //else this.player.setVelocityY(0);
}

const config = {
    type: Phaser.AUTO, // Canva ou WebGL
    width: 600,
    height: 400,
    backgroundColor: '#FF0FF',
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