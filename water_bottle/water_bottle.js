var waterBottle = {
  contentsVolume: 0,
  drinkBloodOfEnemies: function(){
    this.contentsVolume = 100;
  },
  drown: function(){
    var output;
    if (this.contentsVolume>10){
      this.contentsVolume -= 10;
      output = 10
    } else {
      output = this.contentsVolume-1
      this.contentsVolume = 1;
    }
    return output
  },
  drownFull: function(){
    var output = this.contentsVolume;
    this.contentsVolume = 1;
    return output;
  }
}


module.exports = waterBottle;