// Plataforma.js

class Plataformas  {
  preload() {
   
    this.load.image('blocos', 'assets/chao.png'); 
    
    
    
  } // fim da preload dentro da preload 

  create() {
    
    const plataformas = this.physics.add.staticGroup();
  
    let plataforma1 = plataformas.create(600, 200, 'blocos');
    plataforma1.setScale(1).refreshBody();
   
  
   
  

  

  

 


    
  } // fim da create dentro da create

  update() {



   



   


  } // fim da update dentro da Plataforma 
}






export default Plataformas;// fase2.js