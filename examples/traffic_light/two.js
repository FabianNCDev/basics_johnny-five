const {five, Board, Led } = require('johnny-five');
const board = new Board();


board.on('ready', function() {
  console.log('ready');
  var red = new Led(13);
  var yellow = new Led(12);
  var green = new Led(11);
  normalWork(1000, 1000, red, yellow, green);
});

function normalWork(timeBlink, timePass , red, yellow, green) {
  // red.blink(timeBlink);
  // red.on();
  //
  // setTimeout(function() {
  //   red.stop();
  //   red.off();
  //   // yellow.blink(timeBlink);
  //   yellow.on();
  //
  //   setTimeout(function() {
  //     yellow.stop();
  //     yellow.off();
  //
  //     // green.blink(timeBlink);
  //     green.on();
  //   }, timePass);
  // }, timePass);

  setInterval(function() {

  },timePass)
}
