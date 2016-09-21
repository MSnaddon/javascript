var bezerker = {
  bloodlust: 100,
  killCount: 0,
  killPeasants: function(number){
    if (number>this.bloodlust){
      number = this.bloodlust;
    }
    this.bloodlust -= number;
    this.killCount += number;
  },
  drink: function(bottle){
    this.bloodlust += bottle.drown();
  }


}

module.exports = bezerker;