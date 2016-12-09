//  to map the blink delay to range that can be seen by the human eye.
function map(x, in_min, in_max, out_min, out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// program example

var Board = require('firmata');

// PINS
const LED= 5;
const POT = 0;

//init variables
var ledOn = 0;
var delay = 0;

// make connection
Board.requestPort(function(err, port) {
  if (err) {
    console.log(err);
    return;
  }

  var board = new Board(port.comName);

  board.on('ready', function() {
    console.log('ready');

    function blink() {
      board.digitalWrite(LED, ledOn);
      ledOn = !ledOn;
      setTimeout(blink, delay);
    }

    board.analogRead(POT, function(d) {
      delay = map(d, 0, 1023, 400, 1600);
      console.log(delay);
    });

    blink();
  });
})
