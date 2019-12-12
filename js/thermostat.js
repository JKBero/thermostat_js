'use strict';

function Thermostat() {
    this._DEFAULT_TEMP = 20;
    this._temperature = this._DEFAULT_TEMP;
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

Thermostat.prototype.switchPsmOn = function () {
    this._powerSavingMode = true;
    this._maximum = this._MAXIMUM_PSM_ON;
};

Thermostat.prototype.reset = function () {
    this._temperature = this._DEFAULT_TEMP;
};

Thermostat.prototype.energyLevel = function () {
    if (this._temperature < 18) {
        return "low-usage";
    } else if (this._temperature < 25) {
        return "medium-usage";
    } else {
        return "high-usage";
    };
};
