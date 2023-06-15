import MyScene from './fase2.js';
import Monstro from './monstro.js';
import Blocos from './plataformas.js';
import { AnimationMonstro } from "./animation/animationMonstro.js";

function preload() {
  this.load.spritesheet('personagem','assets/astronauta_laranja.png', { frameWidth:32.8, frameHeight:47.5 });
  
  this.load.image('chao', 'assets/chao.png'); 
  this.load.image('bandeira', 'assets/bandeira.png'); 
  this.load.image('fundo', 'assets/fase1.png');
  this.load.image('meteoro', 'assets/meteorod2d.png');
  this.load.image('cartucho', 'assets/cartucho.png');


  
    /** monstro.png - widht: 16 - height: 16*/
    /** monstro2.png - widht: 51 - height: 53*/
    /** monstro3.png - widht: 43 - height: 43*/
  this.load.spritesheet('vox','assets/monstro3.png',{frameWidth:43,frameHeight:43});
  
  this.load.spritesheet('tiro', 'assets/tiro.png', {frameWidth:30,frameHeight:20});
}

var qtdChamadas = 0;
var personagemVivo=true;
var vidas = 3;
var textoVidas;
function atualizarTextoVidas() {
  textoVidas.setText('Vidas: ' + vidas);
}


function perderVida() {
  vidas--;
  atualizarTextoVidas();

  
  if (vidas <= 0) {
    console.log("Fim de jogo");
    window.location.href = 'deadmenu.html';
  }
}
  
function matarVox(personagem, vox) {
  if ((personagem.body.touching.left || personagem.body.touching.right) && personagem.body.x + personagem.body.height >= vox.body.x) {
    personagem.disableBody(true, true);
    personagemVivo = false;
    perderVida();
  } else if (personagem.body.touching.down && personagem.body.y <= vox.body.y) {
    vox.disableBody(true, true);
    console.log("Vox morto");
  }
}

function acertaTiro(tiro, vox) {
  vox.disableBody(true, true);
}



function create() {

  textoVidas = this.add.text(16, 16, 'Vidas: ' + vidas, { fontSize: '32px', fill: '#000' });

  AnimationMonstro.createAnimations(this);
 
  const plataformasInstance = new Blocos(this);
  plataformasInstance.preload();
 
  plataformasInstance.create();
  
  
  const fundo = this.add.image(620, 300, 'fundo').setScale(1.0);

  // Define o scrollFactor do fundo como zero
  fundo.setScrollFactor(0);

  
  const plataformas = this.physics.add.staticGroup();

  let plataforma14 = plataformas.create(270, 380, 'chao');
  plataforma14.setScale(1).refreshBody();
  
  let plataforma3 = plataformas.create(65, 200, 'chao');
  plataforma3.setScale(1).refreshBody();
  let plataforma4 = plataformas.create(395, 200, 'chao');
  plataforma4.setScale(1).refreshBody();
  let plataforma5 = plataformas.create(525, 332, 'chao');
  plataforma5.setScale(1).refreshBody();


  //PRIMEIRA
  let plataforma1 = plataformas.create(-100, 427, 'chao');
  plataforma1.setScale(1).refreshBody();
  
  let plataforma6 = plataformas.create(654, 332, 'chao');
  plataforma6.setScale(1).refreshBody();
  let plataforma7 = plataformas.create(654, 284, 'chao');
  plataforma7.setScale(1).refreshBody();
  let plataforma8 = plataformas.create(830, 427, 'chao');
  plataforma8.setScale(1).refreshBody();
  let plataforma9 = plataformas.create(1034, 262, 'chao');
  plataforma9.setScale(1).refreshBody();
  
  let plataforma12 = plataformas.create(270, 427, 'chao');
  plataforma12.setScale(1).refreshBody();
  let plataforma13 = plataformas.create(397, 427, 'chao');
  plataforma13.setScale(1).refreshBody();
  
  
  let plataforma17 = plataformas.create(900, 350, 'chao');
  plataforma17.setScale(1).refreshBody();
  let plataforma18 = plataformas.create(200, 200, 'chao');
  plataforma18.setScale(1).refreshBody();

  let plataforma15 = plataformas.create(1340, 427, 'chao');
  plataforma15.setScale(1).refreshBody();
  let plataforma16 = plataformas.create(1467, 427, 'chao');
  plataforma16.setScale(1).refreshBody();


  //let plataforma19 = plataformas.create(900, 650, 'chao');
  //plataforma19.setScale(1).refreshBody();
  /*let plataforma20 = plataformas.create(400, 500, 'chao');
  plataforma20.setScale(1).refreshBody();
  */

  const chao = this.physics.add.staticImage(397, 380, 'chao');
  chao.body.setSize(129, 46, 0, 0);
  this.physics.add.collider(chao,personagem );
  
  
  var personagem = this.physics.add.sprite(-100, 330, 'personagem');
  var tiro = this.physics.add.sprite(0, 0, 'tiro');
  var vox = this.physics.add.sprite(300, 250, 'vox');
  var vox2 = this.physics.add.sprite(10, 150, 'vox');
  var vox3 = this.physics.add.sprite(620, 230, 'vox');
  var vox4 = this.physics.add.sprite(1300, 370, 'vox');


  this.physics.add.collider(personagem, chao);
  this.physics.add.collider(plataformas, personagem);
  this.physics.add.collider(plataformas, personagem);
  
 
  this.physics.add.collider(plataformas,vox);
   this.physics.add.collider(tiro,vox);
  this.physics.add.collider(chao,vox);
  vox.setCollideWorldBounds(true);
  vox.body.setSize(0,0,0,40);

  
  
  this.physics.add.overlap(personagem, vox, matarVox, null, this);
  this.physics.add.overlap(tiro, vox, acertaTiro, null, this);

  
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
    
    frames : this.anims.generateFrameNumbers('personagem', { start : 20, end : 23}),
    frameRate: 10,
   
    repeat : -1
  });
  
  this.anims.create({
    key :'morte',
    frames :this.anims.generateFrameNumbers('personagem',{start:46,end:52}),
    frameRate :10,
    repeat :-1
  })
  this.personagem = personagem;
/*
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
  */

  this.vox = vox;

this.cartucho = this.physics.add.image(270, 321, 'cartucho');
this.cartucho.setCollideWorldBounds(true);
this.cartucho.setScale(0.05); // Reduzir o tamanho pela metade

// Configurar a colisão do personagem com o cartucho
this.physics.add.collider(this.personagem, this.cartucho, this.pegarCartucho, null, this);
  
  
var pontuacao = 0;
var pontuacaoTextBandeira = this.add.text(16, 16, 'Pontuação: 0', { fontSize: '32px', fill: '#000' });
pontuacaoTextBandeira.setScrollFactor(0);
pontuacaoTextBandeira.setOrigin(0, 0);
textoVidas = this.add.text(16, 48, 'Vidas: ' + vidas, { fontSize: '32px', fill: '#000' }); // Ajuste as coordenadas Y para 48
textoVidas.setScrollFactor(0);
textoVidas.setOrigin(0, 0);




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

  this.cameras.main.startFollow(personagem);
  this.cameras.main.setZoom(0.8); // Define o zoom da câmera para 80% do tamanho original
  this.cameras.main.setFollowOffset(-100, 0); // Afasta a câmera 100 pixels para a esquerda

 this.meteoros = this.physics.add.group();

function criarMeteoro() {
  var x = Phaser.Math.Between(0, this.cameras.main.width); // Posição horizontal aleatória dentro da largura da câmera
  var y = Phaser.Math.Between(0, this.cameras.main.height) - 500; // Posição vertical aleatória acima da tela

  var meteoro = this.meteoros.create(x, y, 'meteoro');
  meteoro.setVelocityY(Phaser.Math.Between(100, 300)); // Velocidade de queda aleatória
  meteoro.setScale(0.03); // Define o tamanho do meteoro (ajuste conforme necessário)
}


this.time.addEvent({
  delay: 2000,
  loop: true,
  callback: criarMeteoro,
  callbackScope: this
});


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
    escolha = false;
  }
}

var escolha = false;
var quantidadeTiros = 2;
var pegouCartuchos = false;

function update() {
  let cursors = this.input.keyboard.createCursorKeys();
  var personagem = this.personagem;
  personagem.body.setGravity(0, 300);

  var vox = this.vox;
  vox.body.setGravity(0, 300);

  if (personagem.y > game.config.height) {
    console.log("Personagem caiu");
    personagem.enableBody(true, -100, 330, true, true);
    personagemVivo = true;
    perderVida();
  }

  if (escolha == false) {
    voxMovimentosDireita(vox);
    vox.anims.play('vox_direita', true);
    vox.flipX = false;
  }

  if (escolha == true) {
    voxMovimentosEsquerda(vox);
    vox.anims.play('vox_esquerda', true);
    vox.flipX = true;
  }

  if ((cursors.space.isDown || cursors.up.isDown) && (personagem.body.onFloor() || personagem.jumpCount < 2)) {
    personagem.setVelocityY(-250);
    personagem.anims.play('pulo', true);
    personagem.jumpCount++;
  }

  if (cursors.left.isDown) {
    personagem.setVelocityX(-160);
    personagem.anims.play('esquerda', true);
    personagem.flipX = true;
  } else if (cursors.right.isDown) {
    personagem.setVelocityX(160);
    personagem.anims.play('direita', true);
    personagem.flipX = false;
  } else if (cursors.up.isDown) {
    personagem.setVelocityY(-160);
    personagem.anims.play('morte', true);
  } else if (cursors.down.isDown) {
    personagem.setVelocity(0);
    personagem.anims.play('pulo', true);
  } else if (cursors.space.isDown && personagem.body.onFloor()) {
    // primeiro pulo
    console.log("Primeiro pulo ");
    personagem.setVelocityY(-250);
    personagem.anims.play('pulo', true);
  } else {
    personagem.setVelocityX(0);
    personagem.anims.play('parado', false);
  }

  if (personagemVivo === false) {
    console.log("Reviver");
    personagem.enableBody(true, -100, 330, true, true);
    personagemVivo = true; // Definir personagemVivo como true após o ressurgimento
  }

  var tiro;
  if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T).isDown) {
    if (quantidadeTiros > 0) {
      var posAstronautaX = personagem.x;
      var posAstronautaY = personagem.y;

      tiro = this.physics.add.sprite(posAstronautaX, posAstronautaY, 'tiro');
      tiro.body.setGravity(0);

      // Determinar a direção do tiro com base na direção em que o personagem está virado
      if (personagem.flipX) {
        tiro.body.velocity.x = -500; // Tiro para a esquerda
      } else {
        tiro.body.velocity.x = 500; // Tiro para a direita
      }

      this.physics.add.overlap(tiro, vox, acertaTiro, null, this);

      quantidadeTiros--; // Reduzir a quantidade de tiros
      console.log("Quantidade de tiros restantes:", quantidadeTiros);
    } else {
      console.log("Sem munição. Recarregue para atirar novamente.");
    }
  }

  // Verificar se o personagem pegou os cartuchos e recarregar
  if (pegouCartuchos) {
    quantidadeTiros = 2; // Recarregar a quantidade de tiros
    pegouCartuchos = false; // Resetar a flag de pegouCartuchos
    console.log("Munição recarregada. Quantidade de tiros:", quantidadeTiros);
  }

  this.physics.overlap(personagem, this.meteoros, colidirMeteoro, null, this);
}
function pegarCartucho(personagem, cartucho) {
  cartucho.disableBody(true, true); // Remover o cartucho do jogo
  pegouCartuchos = true; // Definir pegouCartuchos como true
  quantidadeTiros += 2; // Aumentar a quantidade de tiros em 2


  //tem que arrumar a funcão de update das municoes
  console.log("Cartucho coletado. Quantidade de tiros:", quantidadeTiros);

  // Recarregar o cartucho
  this.cartucho.enableBody(true, 270, 321, true, true);
  this.cartucho.setScale(0.05);

  // Atualizar a quantidade de tiros exibida na interface do jogo, se houver
  // ...
}


function colidirMeteoro(personagem, meteoro) {
  meteoro.disableBody(true, true); // Remove o meteoro do jogo
  perderVida(); // Diminui em 1 a vida do personagem

  // Verifica se ainda possui vidas restantes
  if (vidas <= 0) {
    console.log("Fim de jogo");
    window.location.href = 'deadmenu.html';
  } else {
    // Respawn do personagem
    personagem.enableBody(true, -100, 330, true, true);
    personagemVivo = true;
  }
}

const config = {
    type: Phaser.AUTO, // Canva ou WebGL
    width: 1300,
    height: 720,
    backgroundColor: '##000',
    autoCenter : Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
        arcade: {/*
            gravity: {
                y: 300
            },*/
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        MyScene: MyScene,
        Blocos :Blocos
   }  

};

const game = new Phaser.Game(config);