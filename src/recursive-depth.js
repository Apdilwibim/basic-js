const CustomError = require("../extensions/custom-error");

let max = 0;
module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(value, current = 1) {
    for (let i = 0; i < value.length; i++) {
      if (Array.isArray(value[i])) max = this.calculateDepth(value[i], current + 1);
    }
    max = (max > current) ? max : current;
    let dep = max;
    max = 0;
    return dep;
  }
};