'use strict';

function Thermostat() {
    this._temperature = 20;
    this._MINIMUM = 10;
    this._powerSavingMode = true;
    this._MAXIMUM_PSM_ON = 25;
};

Thermostat.prototype.up = function () {
  if (this._temperature !== this._MAXIMUM_PSM_ON){
    this._temperature++;
  };
};

Thermostat.prototype.down = function () {
    if (this._temperature !== this._MINIMUM) {
        this._temperature--;
    };
};
