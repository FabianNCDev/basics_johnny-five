const express = require('express');
var app = express();
const path = require('path');
var exphbs = require('express-handlebars');

var {Board, Led} = require('johnny-five');
var board = new Board({
  rpl: false
});

board.on('ready',function() {
  this.led = new Led(11);
});

app.set('port', 3000 || process.env.PORT );
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine','.hbs');

function redirectIndex(res) {
  res.redirect('/');
}

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/on', (req,res) => {
  if (board.isReady) {console.log(board.led.on());}
  redirectIndex(res);
});
app.get('/off', (req,res) => {
  if (board.isReady) {
    board.led.stop();
    board.led.off();
  }
  redirectIndex(res);
});
app.get('/pulse', (req,res) => {
  if (board.isReady) {board.led.pulse();}
  redirectIndex(res);
});

app.listen(app.get('port'), ()=>{
  console.log('server on port ', app.get('port'));
});
