const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (let item of backyard) {
    for (let i of item) {
      if (/^(\^\^)$/.test(i)) count++;
    };
  }
  return count;
};


