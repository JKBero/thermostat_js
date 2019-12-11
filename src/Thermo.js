'use strict';

function Thermostat() {
    this._temperature = 20;
    this._MINIMUM = 10;
};

Thermostat.prototype.up = function () {
    this._temperature++;
};

Thermostat.prototype.down = function () {
    if (this._temperature !== this._MINIMUM) {
        this._temperature--;
    };
};
