var Board = require('firmata');

const LED = 5;

var brightness = 0;
var fadeAmount = 5;

Board.requestPort(function(err, port) {

  var board = new Board(port.comName);
  board.on('ready', function() {
    board.pinMode(LED, board.MODES.PWM);

    function fadeLed() {
      brightness += fadeAmount;
      if (brightness === 0 || brightness === 255) {
        fadeAmount = -fadeAmount;
      }
      board.analogWrite(LED, brightness);
      setTimeout(fadeLed, 30);
    }

    fadeLed();
  });
});
