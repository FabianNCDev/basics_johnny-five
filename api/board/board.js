var five = require('johnny-five');
var board = new five.Board({
  id: "myArduinoBoard",
  port: "/dev/ttyACM0",
  repl: true,
});

board.on('ready', function() {
  console.log('im ready');
  console.log(this.id);
  console.log(this.port);
  // console.log(this.repl);

  // inicizaliacion de un led
  var led = new five.Led(13);

  // injeccion del el den repl para acceder al led mientras se ejecuta
  // led.on()
  // led.off()
  // led.blink()
  // led.blink(500)
  this.repl.inject({
    led: led
  });
});
