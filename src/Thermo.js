'use strict';

function Thermostat() {
    this._temperature = 20;
    this._MINIMUM = 10;
    this._powerSavingMode = true;
    this._MAXIMUM_PSM_ON = 25;
    this._MAXIMUM_PSM_OFF = 32;
    this._maximum = this._MAXIMUM_PSM_ON;
};

Thermostat.prototype.up = function () {
    if (this._temperature !== this._maximum) {
        this._temperature++;
    };
};

Thermostat.prototype.down = function () {
    if (this._temperature !== this._MINIMUM) {
        this._temperature--;
    };
};

Thermostat.prototype.switchPsmOff = function () {
    this._powerSavingMode = false;
    this._maximum = this._MAXIMUM_PSM_OFF;
};
