
export class Garrafas {
  static createGarrafas(scene, personagem,vox,monstros) {
    const garrafas_cenario = scene.physics.add.staticGroup();
    


    let garrafa1 = garrafas_cenario.create(270, 300, 'bandeira');
    garrafa1.setScale(0.04).refreshBody();
   
   

    
   // scene.physics.add.collider(personagem, garrafas_cenario);
   // scene.physics.add.collider(vox,garrafas_cenario);
    
    
    return garrafas_cenario;
  }
}

export default Garrafas;

/*
 var pontuacao = 0;
  var pontuacaoTextBandeira = this.add.text(16, 16, 'Pontuação: 0', { fontSize: '32px', fill: '#000' });
  pontuacaoTextBandeira.setScrollFactor(0);
  pontuacaoTextBandeira.setOrigin(0, 0);

*/