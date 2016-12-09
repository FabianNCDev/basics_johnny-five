const Stream = require('stream');
var serialPort = require('serialport');

const modem = 'ttyACM0';

var ws = new Stream();

ws.writable = true;

var serialport = new serialPort('/dev/' + modem, {
  baudrate: 9600,
  parser: serialPort.parsers.readline("\n")
});

ws.write = function (data) {
  serialport.write(data);
}

ws.end = function(buf) {
  console.log('bye');
};

process.stdin.pipe(ws);
