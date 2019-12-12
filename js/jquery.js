'use strict';

$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#temp").text(`Current Temperature: ${thermostat.temperature}°C`);

  $("#up").click(function() {
    thermostat.up();
    $("#temp").text(`Current Temperature: ${thermostat.temperature}°C`);
  });

  $("#down").click(function() {
    thermostat.down();
    $("#temp").text(`Current Temperature: ${thermostat.temperature}°C`);
  });

  $("#reset").click(function() {
    thermostat.reset();
    $("#temp").text(`Current Temperature: ${thermostat.temperature}°C`);
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

  $("#city").click(function() {
    var city = $("#city option:selected").text()
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=d3b4e49d7817c363daf01d1177040cef`, function(data) {
      var temp = (data.main.temp - 273.15).toFixed(2);
      $("#local-temp").text(`London weather: ${temp}°C`);
      $("#local-temp").text(`${city} temperature: ${temp}`);
    });
  });

});
