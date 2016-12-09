const Serialport = require('serialport');

var serialport = new Serialport('/dev/ttyACM0',{
  baudrate: 9600,
  parser: Serialport.parsers.readline('\n')
});

serialport.on('open', function () {
  console.log('port open');
  serialport.on('data', function (data) {
    console.log(data);
  });
});
