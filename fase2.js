// fase2.js

class MyScene extends Phaser.Scene {
  preload() {
    console.log("preload em MyScene");
    this.load.image('fundo', 'assets/fundo_marte_2.png'); // Adicione a extensão .png ou apropriada aqui
  }

  create() {
    console.log("create em MyScene");
    this.add.image(620, 300, 'fundo').setScale(3.0);
  }
}






export default MyScene;