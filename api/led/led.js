const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function() {
  var led = new five.Led(13);

  this.repl.inject({
    led: led
  });

  led.blink();
  // led.stop() para si esta parpadeando
  // led.off() apaga si esta encendido
  // led.on()
  // led.blink()

});
