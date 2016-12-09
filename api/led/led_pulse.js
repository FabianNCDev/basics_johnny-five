const { Board, Led } = require('johnny-five');
const board = new Board();

board.on('ready', function() {
  // pin que soporte pwm
  let led = new Led(11);

  led.pulse();

  // espera 10 segundos y apaga el led
  this.wait(10000,function() {
    // stop termina el intervalo
    // off apaga el led
    console.log('apagando...');
    led.stop().off();
  });
});
