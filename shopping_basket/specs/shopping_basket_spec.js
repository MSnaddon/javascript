var basket = require("../shopping_basket")
var shop = require("../shop")
var assert = require("assert")


describe("shopping basket", function(){

  var item1;
  var item2;

  beforeEach(function(){
    item1 = shop.makeItem("Roast duck in asparagus sauce", 8, 0);
    item2 = shop.makeItem("Tin of beans", 0.6, 0)
    item3 = shop.makeItem("Pack of on it's dates", 2.5, 1)
  })

  it("can add items", function(){
    basket.add(item1)
    assert.equal(item1, basket.contents[0])
  })

  it("can remove items", function(){
    basket.add(item1)
    basket.add(item2)
    assert.equal(item1.name, basket.remove().name)
  })

  it("can remove specific items", function(){
    basket.add(item1);
    basket.add(item2);
    assert.equal(item2.name, basket.remove(item2).name)
  })

  it("Can Calculate Total", function(){
    assert.equal(16.6, basket.subTotal())
  })

  it("discounts 10% if over 20", function(){
    basket.add(item1)
    assert.equal(22.14, basket.total())
  })

  it("discounts 15% if over20 and has loyalty card", function(){
    basket.loyaltyCard = true;
    assert.equal(20.91, basket.total());
  })

  it("can apply bogof", function(){
    basket.add(item3);
    basket.add(item3);
    assert.equal(22.66,basket.total());
  })


})