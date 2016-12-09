var five = require('johnny-five');

// var edison = require('edison.io');

var board = new five.Board();

board.on('ready', function(){
  console.log('board is ready');

  this.repl.inject({
    led13: new five.Led("13")
  });
})
