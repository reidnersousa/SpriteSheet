
export class Plataformas {
  static createPlataformas(scene, personagem,vox,monstros) {
    const plataformas_cenario = scene.physics.add.staticGroup();
    
    

    // create(x ,y) x linha e y coluna 

     //bloco nivel 1    b1p1  b1 altura do bloco e p1 e a posição em relação ao eixo y
    let b1p1 = plataformas_cenario.create(20, 200, 'chao');
    b1p1.setScale(1).refreshBody();
    let b1p2 = plataformas_cenario.create(200, 200, 'chao');
    b1p2.setScale(1).refreshBody();

   
    let b1p3 = plataformas_cenario.create(397, 200, 'chao');
    b1p3.setScale(1).refreshBody();
    let b1p4 = plataformas_cenario.create(654, 200, 'chao');
    b1p4.setScale(1).refreshBody();
    let b1p5 = plataformas_cenario.create(830, 200, 'chao');
    b1p5.setScale(1).refreshBody();
    //bloco nivel 1

    // bloco nivel 2
    let b2p1 = plataformas_cenario.create(140, 333, 'chao');
    b2p1.setScale(1).refreshBody();
    let b2p2 = plataformas_cenario.create(525, 333, 'chao');
    b2p2.setScale(1).refreshBody();
    let b2p3 = plataformas_cenario.create(654, 333, 'chao');
    b2p3.setScale(1).refreshBody();
    //bloco nivel 2
    
 

  
    let b3p1 = plataformas_cenario.create(270, 380, 'chao');
    b3p1.setScale(1).refreshBody();

    let b3p2 = plataformas_cenario.create(397, 380, 'chao');
    b3p2.setScale(1).refreshBody();

    let b3p3 = plataformas_cenario.create(1004, 380, 'chao');
    b3p3.setScale(1).refreshBody();
    


  
    let b4p1 = plataformas_cenario.create(140, 427, 'chao');
    b4p1.setScale(1).refreshBody();

    
    
    let b4p2 = plataformas_cenario.create(397, 427, 'chao');
    b4p2.setScale(1).refreshBody();

    let b4p3 = plataformas_cenario.create(525, 427, 'chao');
    b4p3.setScale(1).refreshBody();

     let b4p4 = plataformas_cenario.create(653, 427, 'chao');
    b4p4.setScale(1).refreshBody();
     
    let b4p5 = plataformas_cenario.create(782, 427, 'chao');
    b4p5.setScale(1).refreshBody();

    let b4p5_5 = plataformas_cenario.create(900, 427, 'chao');
    b4p5_5.setScale(1).refreshBody();
    let b4p6 = plataformas_cenario.create(1340, 427, 'chao');
    b4p6.setScale(1).refreshBody(); 
    let b4p7 = plataformas_cenario.create(1467, 427, 'chao');
    b4p7.setScale(1).refreshBody();
   

  
    

   // let plataforma20 = plataformas_cenario.create(-100, 330, 'chao');
   // plataforma20.setScale(1).refreshBody();
    //PRIMEIRA
   // let plataforma1 = plataformas_cenario.create(-100, 427, 'chao');
    //plataforma1.setScale(1).refreshBody();
    
    
    
    
    
  
    
    
    
    
    
  
    

    
    scene.physics.add.collider(personagem, plataformas_cenario);
    scene.physics.add.collider(vox,plataformas_cenario);
    
    
    return plataformas_cenario;
  }
}

export default Plataformas;

