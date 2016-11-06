var five = require('johnny-five');
var board = new five.Board({
  port: "/dev/ttyACM0",
  repl: true
});

board.on('ready', function() {

  var led = new five.Led(13);
  led.strobe(1000);
});
