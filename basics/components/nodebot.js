var five, Nodebot;

five = require('johnny-five');

five.Board().on('ready', function () {
  Nodebot = new five.Nodebot({
    right: 10,
    left: 11
  });
  this.repl.inject({
    n: Nodebot  
  })
})
