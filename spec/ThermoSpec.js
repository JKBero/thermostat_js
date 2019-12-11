'use strict';

describe('Thermostat', function () {

    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it('has a starting temp of 20 degrees', function () {
        expect(thermostat._temperature).toEqual(20);
    });

    it('increases the temp by 1 when using up function', function () {
        thermostat.up();
        expect(thermostat._temperature).toEqual(21);
    });

    it('decreases the temp by 1 when using down function', function () {
        thermostat.down();
        expect(thermostat._temperature).toEqual(19);
    });

    it("doesn't go lower than 10 degrees", function () {
        for (var i = 0; i < 11; i++) {
            thermostat.down();
        }
        expect(thermostat._temperature).toEqual(10);
    });

    it("is set to power saving mode by default", function () {
        expect(thermostat._powerSavingMode).toBeTrue();
    });

    it("has a maximum temp of 25 when PSM is on", function () {
        for (var i = 0; i < 6; i++) {
            thermostat.up();
        };
        expect(thermostat._temperature).toEqual(25);
    });

    it("has a maximum temp of 25 when PSM has been switched off and turned on again", function () {
        thermostat.switchPsmOff();
        thermostat.switchPsmOn();
        for (var i = 0; i < 6; i++) {
            thermostat.up();
        };
        expect(thermostat._temperature).toEqual(25);
    });

    it("has a maximum temp of 32 when PSM is off", function () {
        thermostat.switchPsmOff();
        for (var i = 0; i < 13; i++) {
            thermostat.up();
        }
        expect(thermostat._temperature).toEqual(32);
    });
});
