

export class Plataformas {
  static createPlataformas(scene) {
    const plataformas_cenario = scene.physics.add.staticGroup();
    let p1 = plataformas_cenario.create(130, 330, 'chao');

    let plataforma20 = plataformas_cenario.create(-100, 330, 'chao');
    plataforma20.setScale(1).refreshBody();

    
  }
}

export default Plataformas;

