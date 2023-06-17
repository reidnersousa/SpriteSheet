
export class Plataformas {
  static createPlataformas(scene, personagem) {
    const plataformas_cenario = scene.physics.add.staticGroup();


    let plataforma3 = plataformas_cenario.create(65, 200, 'chao');
    plataforma3.setScale(1).refreshBody();
    let plataforma4 = plataformas_cenario.create(395, 200, 'chao');
    plataforma4.setScale(1).refreshBody();
    let plataforma5 = plataformas_cenario.create(525, 332, 'chao');
    plataforma5.setScale(1).refreshBody();

    let p1 = plataformas_cenario.create(130, 330, 'chao');

    let plataforma20 = plataformas_cenario.create(-100, 330, 'chao');
    plataforma20.setScale(1).refreshBody();
    //PRIMEIRA
    let plataforma1 = plataformas_cenario.create(-100, 427, 'chao');
    plataforma1.setScale(1).refreshBody();
    
    let plataforma6 = plataformas_cenario.create(654, 332, 'chao');
    plataforma6.setScale(1).refreshBody();
    let plataforma7 = plataformas_cenario.create(654, 284, 'chao');
    plataforma7.setScale(1).refreshBody();
    let plataforma8 = plataformas_cenario.create(830, 427, 'chao');
    plataforma8.setScale(1).refreshBody();
    let plataforma9 = plataformas_cenario.create(1034, 262, 'chao');
    plataforma9.setScale(1).refreshBody();
  
    let plataforma12 = plataformas_cenario.create(270, 427, 'chao');
    plataforma12.setScale(1).refreshBody();
    let plataforma13 = plataformas_cenario.create(397, 427, 'chao');
    plataforma13.setScale(1).refreshBody();
    
    
    let plataforma17 = plataformas_cenario.create(900, 350, 'chao');
    plataforma17.setScale(1).refreshBody();
    let plataforma18 = plataformas_cenario.create(200, 200, 'chao');
    plataforma18.setScale(1).refreshBody();
  
    let plataforma15 = plataformas_cenario.create(1340, 427, 'chao');
    plataforma15.setScale(1).refreshBody();
    let plataforma16 = plataformas_cenario.create(1467, 427, 'chao');
    plataforma16.setScale(1).refreshBody();

    
    scene.physics.add.collider(personagem, plataformas_cenario);
  }
}

export default Plataformas;

