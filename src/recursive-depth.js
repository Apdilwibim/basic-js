const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(value) {
    return 1 + (arr instanceof Array ? arr.reduce(function (max, item) {
      return Math.max(max, this.calculateDepth);
    }, 0) : -1);
  }
};