"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection({ name: "tessel", adaptor: "tessel", port: "A" })
  .device({ name: "blinkm", driver: "blinkm" })
  .on("ready", function(bot) {
    bot.blinkm.stopScript();

    bot.blinkm.getFirmware(function(err, version) {
      console.log("Started BlinkM version " + version);
    });

    bot.blinkm.goToRGB(0,0,0);
    bot.blinkm.getRGBColor(function(err, data) {
      console.log("Starting Color: ", data);
    });

    setTimeout(function() {
      bot.blinkm.getRGBColor(function(err, data) {
        console.log("Current Color: ", data);
      });

      bot.blinkm.fadeToRandomRGB(128, 128, 128);
    }, 2000);
  });

Cylon.start();
