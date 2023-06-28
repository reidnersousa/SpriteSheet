// monstro.js
import { MonstroGrupo } from './monstrosGrupo.js';

export class Monstro extends MonstroGrupo {
  constructor(scene) {
    super(scene);
   

   
   
  }
  createMonstro(){
    this.addMonstro(10, 150, 'vox');
    this.addMonstro(300, 250, 'vox');
    this.addMonstro(1300, 370, 'vox');
    
  }
  updateMonstro(){
    this.moveMonstros(25);
    this.playAnimation('vox_direita');
   

    
  }
  updateMonstroEsquerda(){
    this.moveMonstros(-55);
    this.playAnimation('vox_esquerda');
   
  }
  createMonstroCollide(plataformas,personagem){
    
    this.collideMonstros();
    this.collideMonstrosPlataformas(plataformas);
    this.collideMonstrosPersonagem(personagem);
  }
 
}

  