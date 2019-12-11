'use strict';

function Thermostat() {
    this._temperature = 20;
};

Thermostat.prototype.up = function(){
  this._temperature ++;
};
