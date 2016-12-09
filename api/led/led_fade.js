const { Board, Led } = require('johnny-five');
const board = new Board();

board.on('ready', function() {
  var led = new Led(11);

  led.fadeIn();

  this.wait(5000,function() {
    led.fadeOut();
  });

  this.repl.inject({
    led: led
  });
});
