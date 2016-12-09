const five = require('johnny-five');

const board = five.Board();

board.on('ready', function() {
  console.log('rady');

  var button = new five.Button(7);
  button.on('down', function() {
    console.log('down');
  })

  button.on('up', function () {
    console.log('up');
  });
  button.on('hold', function () {
    console.log('hold');
  });

  this.repl.inject({
    button: button
  })
});
