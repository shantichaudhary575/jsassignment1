const cylinder = {
    radius: 0,
    height: 0,
    calculateArea: function() {
      const pi = Math.PI;
      return pi * Math.pow(this.radius, 2) * this.height;
    }
  };


cylinder.radius = 5;
cylinder.height = 10;
console.log(cylinder.calculateArea());   






