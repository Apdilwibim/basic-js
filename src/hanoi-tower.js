const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let moves = (Math.pow(2, disksNumber) - 1);
  let time = (Math.floor((moves / turnsSpeed) * 3600));
  return { turns: moves, seconds: time };
  throw new CustomError('Not implemented');
};
