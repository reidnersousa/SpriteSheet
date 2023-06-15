// Plataformas.js

class Plataformas {
  constructor(scene) {
    this.scene = scene;
  }

  preload() {
    console.log("preload dentro de Plataformas")
    this.scene.load.image('blocos', 'assets/chao.png');
 
   
  }

  create() {
    console.log("create dentro de Plataformas")
    
    const plataformas = this.scene.physics.add.staticGroup();

    let plataforma1 = plataformas.create(130, 400, 'blocos');
    plataforma1.setScale(1).refreshBody();

    // Outras configurações de plataforma...

  }

  update() {
    // Lógica de atualização da plataforma...
  }
}

export default Plataformas;
