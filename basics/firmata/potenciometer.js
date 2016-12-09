var Board = require('firmata');

Board.requestPort(function(err, port) {
  if(err){
    console.log(err);
    return;
  }
  var board = new Board(port.comName);

  board.on('ready', function() {
      console.log('ready');

      board.analogRead(0, function(data) {
        console.log(data);//0-1023
      })
  });
});
