var five = require('johnny-five');
// definiendo IDs A y B de las placs
var boards = new five.Boards(["A","B"]);

// cuando ambas placas inicializen
boards.on('ready', function() {
  var led = new five.Led({
    pin: 13,
    board: this.byId("A")
  });
  led.blink();

  // this es un arreglo que contiene referencias de todas las placas
  this.each(function(board) {
    if (board.id === "B") {
      var led = new five.Led({
        pin:13,
        board: board
      });
      led.blink();
    }
  });
});
/**
 * When initializing multiple boards with only an ID string,
 * the order of initialization and connection is the order
 * that your OS enumerates ports.
 *
 * Given the above program, "A" and "B" would be assigned as:
 *
 * A => /dev/cu.usbmodem411
 * B => /dev/cu.usbmodem621
 *
 *
 * You may override this by providing explicit port paths:
 *
 * var ports = [
 *   { id: "A", port: "/dev/cu.usbmodem621" },
 *   { id: "B", port: "/dev/cu.usbmodem411" }
 * ];
 *
 * new five.Boards(ports).on("ready", function() {
 *
 *   // Boards are initialized!
 *
 * });
 */
