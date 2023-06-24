// monstro.js
import { MonstroGrupo } from './monstrosGrupo.js';

export class Monstro extends MonstroGrupo {
  constructor(scene) {
    super(scene);
   

   
   
  }
  createMonstro(){
    this.addMonstro(10, 150, 'vox');
    this.addMonstro(620, 230, 'vox');
    this.addMonstro(1300, 370, 'vox');
    
  }
  updateMonstro(){
    this.moveMonstros(25);
    this.playAnimation('vox_direita');
    console.log("teste");

    
  }
  updateMonstroEsquerda(){
    this.moveMonstros(-25);
    this.playAnimation('vox_esquerda');
    console.log("esquerda");
  }
 
}

  