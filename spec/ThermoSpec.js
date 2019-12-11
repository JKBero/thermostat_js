'use strict';

describe('Thermostat', function(){

    var thermostat;

    beforeEach(function (){
      thermostat = new Thermostat();
    });

    it ('has a starting temp of 20 degrees', function(){
      expect(thermostat._temperature).toEqual(20);
    });

    it ('increases the temp by 1 when using up function', function(){
      thermostat.up();
      expect(thermostat._temperature).toEqual(21);
    });

    it ('decreases the temp by 1 when using down function', function(){
      thermostat.down();
      expect(thermostat._temperature).toEqual(19);
    });
});
