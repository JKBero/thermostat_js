'use strict';

$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#temp").text(`${thermostat.temperature} DEGREES CELSIUS`);

  $('.temp-marker').attr('style', `height: 55%`);

  $("#up").click(function() {
    thermostat.up();
    if (thermostat.temperature < thermostat._maximum) {
      var currentHeight = parseFloat(($('.temp-marker')[0].style.height));
      var newHeight = (currentHeight + 4);
      $('.temp-marker').attr('style', `height: ${newHeight}%`);
    };
    $("#temp").text(`${thermostat.temperature} DEGREES CELSIUS`);
  });

  $("#down").click(function() {
    thermostat.down();
    if (thermostat.temperature > thermostat._MINIMUM) {
      var currentHeight = parseFloat(($('.temp-marker')[0].style.height));
      var newHeight = (currentHeight - 4);
      $('.temp-marker').attr('style', `height: ${newHeight}%`);
    };
    $("#temp").text(`${thermostat.temperature} DEGREES CELSIUS`);
  });

  $("#reset").click(function() {
    thermostat.reset();
    $('.temp-marker').attr('style', `height: 55%`);
    $("#temp").text(`${thermostat.temperature} DEGREES CELSIUS`);
  });

  $("#energy-usage-button").click(function() {
    $(".pop-up").slideDown();
    $(".energy-usage").text(thermostat.energyLevel());
  });

  $(".close").click(function() {
    $(".pop-up").slideUp();
  });

  $("#psm-on").click(function() {
    if (thermostat.temperature > thermostat._MAXIMUM_PSM_ON) {
      $('.temp-marker').attr('style', `height: 71%`);
    };
    thermostat.switchPsmOn();
    $(this).addClass('green');
    $("#psm-off").removeClass('green');
    $("#temp").text(`${thermostat.temperature} DEGREES CELSIUS`);
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
      $("#local-temp").text(`${city} temperature: ${temp}°C`);
    });
  });

});
