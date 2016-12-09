var Board = require('firmata');

// Pins
const LED = 5;
const POT = 0;

// init variables
var ledOn = 0;
var delay = 0;//blick delay
  
Board.requestPort(function(err, port) {
  if(err){
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

      board.analogRead(0, function(d) {
        delay = d;
      });

      blink();
  });
});
