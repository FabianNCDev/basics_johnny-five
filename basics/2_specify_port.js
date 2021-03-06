var five = require("johnny-five");

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
var board = new five.Board({
    port: "/dev/ttyACM0"
});

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {
  this.pinMode(13, this.MODES.OUTPUT);
  var self = this;
  this.loop(500, function() {
    // Whatever the last value was, write the opposite
    self.digitalWrite(13, self.pins[13].value ? 0 : 1);
  });
});
