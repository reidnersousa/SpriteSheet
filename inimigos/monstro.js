// monstro.js
import { MonstroGrupo } from './monstrosGrupo.js';

export class Monstro extends MonstroGrupo {
  constructor(scene) {
    super(scene);
   

   
   
  }
  createMonstro(){
    this.addMonstro(10, 150, 'vox');
    this.addMonstro(300,250,'vox');  
    this.addMonstro(122,150,'vox');
    this.addMonstro(300, 250, 'vox');
    this.addMonstro(781,370,'vox');
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

   
  createMonstroCollide(plataformas,personagem,tiro){
    
    this.collideMonstros();
    this.collideMonstrosPlataformas(plataformas);
    this.collideMonstrosPersonagem(personagem);
    //console.log('monstro.js tiro',tiro);
    this.collideMonstrosTiro(tiro);
  }
  createPersonagemDisable(personagem,matarVox){
    this.disablePersonagem(personagem,matarVox);
    //console.log('tiro',tiro,'acertaTiro',acertaTiro);
  }
  
  monstroDisable(tiro){
    this.disableMonstro(tiro);
  }

  monstrosSetGravity(){
    this.setGravity();
  }
 
  teste(){
    console.log("OII");
  }
 
}






