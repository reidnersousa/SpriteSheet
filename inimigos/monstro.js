

// monstro.js
import {MonstroGrupo} from './monstroGrupo.js';


function voxMovimentosDireita(vox){
  vox.setVelocityX(25);
  qtdChamadas++;
  
  if(qtdChamadas == 150){
    escolha = true;
  }
}

function voxMovimentosEsquerda(vox){
  vox.setVelocityX(-25);
  qtdChamadas--;
  if(qtdChamadas == -150){
    escolha = false;
  }
}

export class Monstros  {
  static createMonstro(scene){

 
 
  const monstrosGroup = new MonstroGrupo(scene);

  // Adiciona sprites de monstro ao grupo
  monstrosGroup.addMonstro(10, 150, 'vox');
  monstrosGroup.addMonstro(620, 230, 'vox');
  monstrosGroup.addMonstro(1300,370,'vox');
     
  //criar uma condição para alterna 
  //entre os 2
  
  monstrosGroup.moveMonstros(25);
  monstrosGroup.playAnimation('vox_direita');
  
  
  monstrosGroup.playAnimation('vox_esquerda');

  return monstrosGroup;
 

  }
 
  
 
  

}