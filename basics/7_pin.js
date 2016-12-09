var five = require('johnny-five');
var temporal = require('temporal');
var board = new five.Board();

board.on('ready', function() {
  var events = [];
  var strobe = new five.pin(13);

  temporal.loop(500, function(loop) {
    strobe[loop.called % 2 === 0 ? 'hight': 'low']();
  });


});
