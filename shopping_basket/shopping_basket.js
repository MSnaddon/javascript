var shoppingBasket = {
  contents: [],
  loyaltyCard: false,
  add: function(item){
    this.contents.push(item);
  },
  remove: function(item){
    if(item){
      return this.contents.splice(this.contents.indexOf(item), 1)[0];
    }
    return this.contents.shift();
  },
  subTotal: function(){
    total = 0;
    for (var item of this.contents){
      total += item.price;
    }
    return Math.floor(total*100)/100
  },
  total: function(){
    var total = this.subTotal();
    if(total>=20 && this.loyaltyCard){
      total *= 0.85;
    } else if (total>20){
      total *= 0.9;
    }
    total -= this.bogofDiscount();
    return Math.floor(total*100)/100
  },
  bogofDiscount: function(){
    var bogofables = [];
    var discount = 0
    for (var item of this.contents){
      if (item.bogof){
        var index = bogofables.indexOf(item)
        if (index>=0){
          bogofables.splice(index,1);
          discount += item.price;
        } else {
          bogofables.push(item);
        }
      }

    }
    return discount;
  }
}

module.exports = shoppingBasket