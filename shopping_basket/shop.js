var shop = {
  makeItem:  function(name, price, bogof){
    return {
      name: name, 
      price: price, 
      bogof: bogof
    };
  }
}

module.exports = shop;