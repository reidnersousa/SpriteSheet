import MyScene from './fase2.js';
// script.js
import { Monstro } from './inimigos/monstro.js';


import { Plataformas}  from './cenario/plataformas.js';
import {Garrafas} from './cenario/garrafas.js';
import { coletarGarrafas } from './funcoes/funcoes.js';
import { AnimationMonstro } from "./animation/animationMonstro.js";
import { AnimationPersonagem } from "./animation/animationPersonagem.js";
import {Tempo} from "./funcoes/tempo.js";
 

function preload() {
  this.load.spritesheet('personagem','assets/astronauta_laranja.png', { frameWidth:32.8, frameHeight:47 });
 
  
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
  console.log('vox',vox);
  vox.disableBody(true, true);
 
}
function acertaTiroMonstros(tiro) {
  console.log("monstros");
 
}




function create() {

 



  textoVidas = this.add.text(16, 16, 'Vidas: ' + vidas, { fontSize: '32px', fill: '#000' });

  AnimationMonstro.createAnimations(this);
  AnimationPersonagem.createAnimations(this);
 
  this.tempo = new Tempo(this);
  const fundo = this.add.image(620, 300, 'fundo').setScale(1.0);

  this.monstros = new Monstro(this);
  this.monstros.createMonstro();
  
 


  // Define o scrollFactor do fundo como zero
  fundo.setScrollFactor(0);
  
  var personagem = this.physics.add.sprite(450, 200, 'personagem');
  var tiro = this.physics.add.sprite(0, 0, 'tiro');
  var vox = this.physics.add.sprite(300, 250, 'vox');
 



  this.physics.add.collider(tiro,vox);
  
 
  
  const plataformas =Plataformas.createPlataformas(this, personagem,vox,this.monstros);
  const garrafas = Garrafas.createGarrafas(this,personagem,vox,this.monstros);

 
  this.monstros.createMonstroCollide(plataformas,personagem,tiro);
  this.physics.add.collider(plataformas,garrafas);
  
  
  
  vox.setCollideWorldBounds(true);
  
  vox.body.setSize(0,0,0,40);

  
  this.physics.add.overlap(personagem, vox, matarVox, null, this);
  
  this.physics.add.overlap(tiro, vox, acertaTiro, null, this);
  this.monstros.createPersonagemDisable(personagem,matarVox);

 

  this.personagem = personagem;
  this.vox = vox;

  this.cartucho = this.physics.add.image(270, 321, 'cartucho');
  this.cartucho.setCollideWorldBounds(true);
  this.cartucho.setScale(0.05);
  this.physics.add.collider(plataformas,this.cartucho);

 
  

  this.physics.add.collider(this.personagem, this.cartucho, this.pegarCartucho, null, this);
  this.physics.add.collider(this.personagem,this.monstros);
  
  
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
      this.scene.stop();
      this.tempo.stop();
      var seuTempo =this.tempo.obterDuracaoPercurso();
      console.log("Seu tempo ",seuTempo);
      
      this.scene.add('Fase2', MyScene, true, { x: 400, y: 800 });
      
       
    }
    bandeira.destroy();
  }

  // Criação da bandeira
  var bandeira = this.physics.add.staticImage(480, 250, 'bandeira');
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
  delay: 1000,
  loop: true,
  callback: criarMeteoro,
  callbackScope: this
});
  


} //fim da função create



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
var quantidadeTiros = 4;
var pegouCartuchos = false;

function update() {

  this.monstros.monstrosSetGravity();
 
  
  let cursors = this.input.keyboard.createCursorKeys();
  var personagem = this.personagem;
  
  personagem.body.setGravity(0, 300);

  var vox = this.vox;
  
 
  vox.body.setGravity(0, 300);
  
  

  if (personagem.y > game.config.height) {
    console.log("Personagem caiu");
    personagem.enableBody(true, 450, 200, true, true);
    personagemVivo = true;
    perderVida();
  }

  if (escolha == false) {
    voxMovimentosDireita(vox);
    this.monstros.updateMonstro();
    
    vox.anims.play('vox_direita', true);
    vox.flipX = false;
  }

  if (escolha == true) {
   
    this.monstros.updateMonstroEsquerda();
    voxMovimentosEsquerda(vox)
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
  } 
  
  
  else if (cursors.up.isDown) {
    personagem.setVelocityY(-160);
    personagem.anims.play('morte', true);
  } else if (cursors.down.isDown) {
    personagem.setVelocity(0);
    personagem.anims.play('pulo', true);
  }
 
  
  else if (cursors.space.isDown && personagem.body.onFloor()) {
    // primeiro pulo
    console.log("Primeiro pulo ");
    personagem.setVelocityY(-250);
    personagem.anims.play('pulo', true);
  }
  
  
  else {
    personagem.setVelocityX(0);
    personagem.anims.play('parado', false);
  }
  
  if (personagemVivo === false) {
    console.log("Reviver");
    personagem.anims.play('morte').once('animationcomplete', () => {
      personagem.enableBody(true, 450, 250, true, true);
      
     });
    personagemVivo = true;
  }
  
  

  var tiro;
 
  if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T).isDown) {
    if (quantidadeTiros > 0) {
      var posAstronautaX = personagem.x;
      var posAstronautaY = personagem.y;

      tiro = this.physics.add.sprite(posAstronautaX, posAstronautaY, 'tiro');
     // tiro.body.setGravity(0);

      // Determinar a direção do tiro com base na direção em que o personagem está virado
      if (personagem.flipX) {
        tiro.body.velocity.x = -500; // Tiro para a esquerda
      } else {
        tiro.body.velocity.x = 500; // Tiro para a direita
      }

     
      
      
      this.monstros.monstroDisable(tiro);
     
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
  this.physics.overlap(personagem, this.cartucho,pegarCartucho,null,this);
 


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
   
    personagem.enableBody(true, 450, 200, true, true);
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
        arcade: {
          /* 
          gravity: {
                y: 300
            },
          */
            debug: false
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
