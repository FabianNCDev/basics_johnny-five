var led0n = false;
var delay = 500;

function blink() {
  digitalWrite(LED, ledOn);
  ledOn = !ledOn;
  console.log(ledOn);
  setTimeout(blink, delay);
}
blink();
