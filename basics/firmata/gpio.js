// general porpose input OUTPUT

  // configuring pin 12 as an input
  board.pinMode(12, board.MODES.INPUT);
  // configuring pin 12 as an output
  board.pinMode(12, board.MODES.OUTPUT);

  // to write a HIGH voltage
  board.digitalWrite(12, board.HEIGH);

  // to write a LOW voltage
  board.digitalWrite(12, board.LOW);

  // besides simple input and outputs you can use the pins
  //  to start up special form of communication, as PWN or hardware
  //  comunnication protocol
