const { Board, Led } = require('johnny-five');
const board = new Board();

board.on('ready', function() {
  
  let led = new Led(13);

  this.repl.inject({
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    },
    encender: function() {
      led.on();
    },
    parpadear: function(tiempo) {
      led.blink(tiempo);
    }
  });

});
