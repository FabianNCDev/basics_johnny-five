const { Board, Led } = require('johnny-five');
const board = new Board();

board.on('ready', function() {
  const led = new Led(13);
  led.on();

  this.on('exit', () => {
    console.log('apagando... ');
    led.off();
  });
});
