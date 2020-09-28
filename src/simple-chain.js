const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value == 'function') {
      let newFunc = (String(value)).replace('function () { }', 'function() {}');
      this.chain.push(newFunc);
      return this
    }
    if (typeof value == undefined) this.chain.push(`(( ))`);
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number') {
      this.chain = [];
      throw new Error('Error')
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let array = (`( ${this.chain.join(' )~~( ')} )`)
    this.chain = [];
    return array;
  }
};

module.exports = chainMaker;
