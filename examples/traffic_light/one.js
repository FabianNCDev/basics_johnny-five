const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function() {
  console.log('ready');
  timePass = 500;

  const redLight = new five.Led(13);
  const yellowLight = new five.Led(12);
  const greenLight = new five.Led(11);
  redLight.strobe(timePass);
  yellowLight.strobe(timePass);
  greenLight.strobe(timePass);

});
