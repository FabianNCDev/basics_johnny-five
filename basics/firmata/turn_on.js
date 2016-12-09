var Board = require('firmata');


var led = 5;

Board.requestPort(function(err, port) {
  if (err) {
    console.log(err);
    return;
  }

  var board = new Board(port.comName);

  board.on('ready', function() {
    console.log('connected');

    board.pinMode(led, board.MODES.OUTPUT);

    board.digitalWrite(led, board.HIGH);
  });
});
