const { Board, Led } = require('johnny-five');
const board = new Board();

board.on('ready', function() {
  let led = new Led({
    pin:13,
    custom:{
      a: 1,
      b: 2,
      c: function() {
        console.log('Im a function');
      }
    }
  });

  console.log(led.custom.a);
  console.log(led.custom.b);

  this.repl.inject({
    led: led
  });

});
