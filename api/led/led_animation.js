const { Board, Led } = require('johnny-five');
const board = new Board();

board.on('ready', function() {
  let led = new Led(11);

  // https://github.com/rwaldron/johnny-five/wiki/Animation#segment-properties

  led.pulse({
    easing: "linear",
    duration: 3000,
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    keyFrames: [0, 10, 0, 50, 0, 255],
    onstop: function() {
      console.log("Animation stopped");
    }
  });

  this.wait(12000, function() {
    console.log('apagando...');
    led.stop().off();
  });

  this.repl.inject({
    led: led
  });
});
