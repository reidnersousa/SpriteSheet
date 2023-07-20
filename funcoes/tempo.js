export class Tempo {
  constructor(scene) {
    this.scene = scene;
    this.clock = scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.updateTime,
      callbackScope: this
    });
    this.elapsedTime = 0;
  }
  updateTime() {
    this.elapsedTime += 1;
    if (this.tempoTexto) {
      this.tempoTexto.destroy();
    }
    this.tempoTexto = this.scene.add.text(16, 16, 'Tempo: ' + this.elapsedTime, { fontSize: '32px', fill: '#000' });
      console.log("Tempo decorrido:", this.elapsedTime, "segundos");
  }

  stop() {
    this.clock.remove();
  }

  obterDuracaoPercurso(){
    return this.elapsedTime += 1;
  }

  
}

