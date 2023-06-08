import MyScene from './fase2.js';
import Monstro from './monstro.js';

function preload() {
 
this.load.spritesheet('personagem','assets/astronauta_laranja.png', { frameWidth:32.8, frameHeight:47.5 });

this.load.image('chao', 'assets/chao.png'); 
this.load.image('bandeira', 'assets/bandeira.png'); 
this.load.image('fundo', 'assets/fase1.png'); 

  /** monstro.png - widht: 16 - height: 16*/
  /** monstro2.png - widht: 39 - height: 55*/
this.load.spritesheet('vox','assets/monstro2.png',{frameWidth:51,frameHeight:53});
}

var qtdChamadas = 0;
var personagemVivo=true;


function matarVox(personagem, vox) {
 
   
  
if (personagem.body.touching.left && personagem.body.x + personagem.body.height >= vox.body.x  ||       
    personagem.body.touching.right && personagem.body.x + personagem.body.height >= vox.body.x){
   
        personagem.disableBody(true, true);
        personagemVivo =false;
        console.log("aa",personagem.body.touching.left,personagem.body.x + personagem.body.height ,vox.body.x );
   
  }
  else if (personagem.body.touching.down && personagem.body.y  <= vox.body.y) {
  
    vox.disableBody(true, true);
    console.log("Vox morto");
   
  }
}


function create() {

  
  this.add.image(620,300,'fundo').setScale(1.0);

  
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

  let plataforma18 = plataformas.create(200, 200, 'chao');
  plataforma18.setScale(1).refreshBody();
 

  
  const chao = this.physics.add.staticImage(397, 380, 'chao');
  chao.body.setSize(129, 46, 0, 0);
  this.physics.add.collider(chao,personagem );
  
  
  var personagem = this.physics.add.sprite(100, 330, 'personagem');


  this.physics.add.collider(personagem, chao);
  this.physics.add.collider(plataformas, personagem);
  
  
  
  var vox = this.physics.add.sprite(300, 250, 'vox');
  this.physics.add.collider(plataformas,vox);
  this.physics.add.collider(chao,vox);
  vox.setCollideWorldBounds(true);
  vox.body.setSize(0,0,0,40);
  
  console.log("bb" ,this.physics.add.overlap(personagem, vox, matarVox, null, this))
  this.physics.add.overlap(personagem, vox, matarVox, null, this);
  
  
  
 

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
        
        frames : this.anims.generateFrameNumbers('personagem', { start : 22, end : 26}),
        frameRate: 3,
        repeat : -1
      });
  this.personagem = personagem;

  this.anims.create({
        key : 'vox_esquerda',
        flipX:true,
        frames : this.anims.generateFrameNumbers('vox', { start : 1, end : 11}),
        frameRate:10,
        repeat : -1
      });

  this.anims.create({
        key : 'vox_direita',
        frames : this.anims.generateFrameNumbers('vox', { start : 1,end:13}),
        frameRate: 10,
        repeat : -1
      });

   this.vox = vox;

var pontuacao = 0;
var pontuacaoTextBandeira = this.add.text(16, 16, 'Pontuação: 0', { fontSize: '32px', fill: '#000' });


function coletarBandeira(personagem, bandeira) {

  pontuacao += 100;
  pontuacaoTextBandeira.setText('Pontuação: ' + pontuacao);

  if(pontuacao === 300){
      this.scene.add('Fase2', MyScene, true, { x: 400, y: 800 });
  }
  bandeira.destroy();
}

// Criação da bandeira
  var bandeira = this.physics.add.staticImage(900, 200, 'bandeira');
  bandeira.setScale(0.2); // Ajusta o tamanho da bandeira
  bandeira.setScale(bandeira.scaleX * 0.2); // Diminui a escala atual em 5 vezes


  // Define a posição e o tamanho da hitbox da bandeira
  var hitboxWidth = bandeira.width * bandeira.scaleX;
  var hitboxHeight = bandeira.height * bandeira.scaleY;
  bandeira.body.setSize(hitboxWidth, hitboxHeight);
  bandeira.body.setOffset((bandeira.width - hitboxWidth) / 2, (bandeira.height - hitboxHeight) / 2); // Ajusta a posição da   hitbox para que fique alinhada com a bandeira visualmente

  // Adicione a colisão entre o personagem e a bandeira
  this.physics.add.overlap(personagem, bandeira, coletarBandeira, null, this);

  var bandeira1 = this.physics.add.staticImage(15, 165, 'bandeira');
  bandeira1.setScale(0.2);
  bandeira1.setScale(bandeira1.scaleX *0.2);
  var hitboxWidth1 = bandeira1.width * bandeira1.scaleX;
  var hitboxHeight1 = bandeira1.height * bandeira1.scaleY;
  bandeira1.body.setSize(hitboxWidth1, hitboxHeight1);
  bandeira1.body.setOffset((bandeira1.width - hitboxWidth1) / 2, (bandeira1.height - hitboxHeight1) / 2);
  this.physics.add.overlap(personagem, bandeira1, coletarBandeira, null, this);


  var bandeira2 = this.physics.add.staticImage(1000, 165, 'bandeira');
  bandeira2.setScale(0.2);
  bandeira2.setScale(bandeira2.scaleX *0.2);
  var hitboxWidth2 = bandeira2.width * bandeira2.scaleX;
  var hitboxHeight2 = bandeira2.height * bandeira2.scaleY;
  bandeira2.body.setSize(hitboxWidth2, hitboxHeight2);
  bandeira2.body.setOffset((bandeira2.width - hitboxWidth2) / 2, (bandeira2.height - hitboxHeight2) / 2);
  this.physics.add.overlap(personagem, bandeira2, coletarBandeira, null, this);

}



function voxMovimentosDireita(vox){
  
  vox.setVelocityX(25);
  qtdChamadas++;
  
  if(qtdChamadas == 150){
    escolha = true;
  }
  
}


function voxMovimentosEsquerda(vox){
  
  vox.setVelocityX(-25);
  qtdChamadas--;
  if(qtdChamadas == -150){
  
    escolha =false;
  }
  
}

var escolha =false;

function update() {

    let cursors = this.input.keyboard.createCursorKeys();
    var personagem = this.personagem;

    var vox = this.vox;

    if (escolha == false){
      voxMovimentosDireita(vox);
      vox.anims.play('vox_direita',true);
      vox.flipX=false;
      
    }
    
    if (escolha == true){ 
      voxMovimentosEsquerda(vox);
      vox.anims.play('vox_esquerda',true);
      vox.flipX=true;
    }
    
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
      personagem.setVelocityY(-300);
      personagem.anims.play('pulo', true);
     
     
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

  
    

    
    
    
    //if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    //else this.player.setVelocityX(0);
    //if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    //else this.player.setVelocityY(0);
}













const config = {
    type: Phaser.AUTO, // Canva ou WebGL
    width: 1200,
    height: 415,
    backgroundColor: '##000',
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
        update: update,
        MyScene: MyScene
   }  

};

const game = new Phaser.Game(config);
