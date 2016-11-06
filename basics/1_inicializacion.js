var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  //creaacion de isntancia de componente led
  var led = new five.Led(13);
  // blink
  led.blink(500);
});
