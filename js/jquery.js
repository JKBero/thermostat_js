'use strict';

$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#temp").text(`Current Temperature: ${thermostat.temperature}°`);

  $("#up").click(function() {
    thermostat.up();
    $("#temp").text(`Current Temperature: ${thermostat.temperature}°`);
  });

  $("#down").click(function() {
    thermostat.down();
    $("#temp").text(`Current Temperature: ${thermostat.temperature}°`);
  });

  $("#reset").click(function() {
    thermostat.reset();
    $("#temp").text(`Current Temperature: ${thermostat.temperature}°`);
  });

  $("#energy-usage-button").click(function() {
    $(".pop-up").slideDown();
    $(".energy-usage").text(thermostat.energyLevel());
  });

  $(".close").click(function() {
    $(".pop-up").slideUp();
  });

  $("#psm-on").click(function() {
    thermostat.switchPsmOn();
    $(this).addClass('green');
    $("#psm-off").removeClass('green');
  });

  $("#psm-off").click(function() {
    thermostat.switchPsmOff();
    $(this).addClass('green');
    $("#psm-on").removeClass('green');
  });

});
