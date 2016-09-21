var waterBottle = require("../water_bottle")
var assert = require('assert')

describe("Water_bottle", function(){

  it ("should be empty, for now", function(){
    // previous test screws this one up
    waterBottle.contentsVolume = 0;
    assert.equal(0, waterBottle.contentsVolume);
  })

  it ("should fill to fully contain he blood of it's enemies", function(){
    waterBottle.drinkBloodOfEnemies();
    assert.equal(100, waterBottle.contentsVolume);
  })

  it("should force it's contents on mortals", function(){
    assert.equal(10,waterBottle.drown());
    assert.equal(90,waterBottle.contentsVolume);
  })

  it("should drown it's enemy in a mighty flood", function(){
    assert.equal(90, waterBottle.drownFull());
    assert.equal(1, waterBottle.contentsVolume);
  })

  it("should never empty once it has tasted blood", function(){
    waterBottle.contentsVolume = 6;
    waterBottle.drown();
    assert.equal(1, waterBottle.contentsVolume);
  })


})