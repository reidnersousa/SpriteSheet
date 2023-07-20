
export class Plataformas_2 {
  static createPlataformas_2(scene, personagem,vox,monstros) {
    const plataformas_cenario = scene.physics.add.staticGroup();
    
    

   
    
    
  
    

    
    scene.physics.add.collider(personagem, plataformas_cenario);
    scene.physics.add.collider(vox,plataformas_cenario);
    
    
    return plataformas_cenario;
  }
}

export default Plataformas;

