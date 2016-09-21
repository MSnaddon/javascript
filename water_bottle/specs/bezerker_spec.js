var bezerker = require("../bezerker")
var bottle = require("../water_bottle")
var assert = require('assert')

describe("A Bezerker", function(){

  it("Should start with bloodlust", function(){
    assert.equal(100, bezerker.bloodlust);
  })

  it("Should keep track of how many peasants it's killed", function(){
    assert.equal(0, bezerker.killCount);
  })

  it("Should use bloodlust when killing peasants", function(){
    bezerker.killPeasants(10);
    assert.equal(90, bezerker.bloodlust);
  })

  it("should be unable to kill when out of bloodlust", function(){
    bezerker.bloodlust = 5;
    bezerker.killCount = 0;
    bezerker.killPeasants(10);
    assert.equal(5, bezerker.killCount);
  })

  it("can refill bloodlust by drinking from evil water bottle", function(){
    bottle.drinkBloodOfEnemies();
    bezerker.drink(bottle);
    assert.equal(10, bezerker.bloodlust);
  })
})