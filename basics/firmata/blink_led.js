var Board = require('firmata');

Board.requestPort(function(err, port) {
  if (err) {
    console.log(err);
    return;
  }
  var board = new Board(port.comName);

  board.on('ready', function() {
    console.log('connected');

    var ledOn = true;

    board.pinMode(13, board.MODES.OUTPUT);

    setInterval(function () {
      if (ledOn) {
        board.digitalWrite(13, board.HIGH);
      }else{
        board.digitalWrite(13, board.LOW);
      }
      ledOn = !ledOn;
    }, 500);
  });
})
