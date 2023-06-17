
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

export class Monstro  {
  static createMonstro(scene){

 
 
  const monstrosGroup = new MonstroGrupo(scene);

  // Adiciona sprites de monstro ao grupo
  monstrosGroup.addMonstro(10, 150, 'vox');
  monstrosGroup.addMonstro(620, 230, 'vox');
  monstrosGroup.addMonstro(1300,370,'vox');
     

  // Inicia a animação 'vox_direita' em todos os sprites de monstro
  monstrosGroup.playAnimation('vox_direita');
  monstrosGroup.playAnimation('vox_esquerda');


 

  }

}
