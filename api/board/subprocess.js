var five = require('johnny-five');
var board = new five.Board({
  repl: false,
  debug: false
});

board.on('connect', function() {
  console.log('board conectadose a la place');
});

board.on('ready', function () {
  console.log('Board is ready!');

});

board.on('exit', function() {
  console.log('coneccion finalizada');
});
