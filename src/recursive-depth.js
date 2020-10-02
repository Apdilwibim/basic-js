const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(value) {
    return Array.isArray(value) ?
      1 + Math.max(...value.map(this.calculateDepth)) :
      0;
  }
};