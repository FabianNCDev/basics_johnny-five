// https://github.com/rwaldron/johnny-five/blob/master/docs/potentiometer.md

const five = require('johnny-five');
const board = new five.Board();

board.on('ready', function () {
  console.log('ready');

  var slider = new five.Sensor({
    pin: 'A0',
    freq: 250
  });

  slider.on('data', function() {
    console.log('data: ', this.value , ' ',this.raw);
  });
});
