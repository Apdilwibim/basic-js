const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator == undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if (options.repeatTimes == undefined) options.separator = '', options.repeatTimes = 1;
  if (options.additionRepeatTimes == undefined) options.additionSeparator = '', options.additionRepeatTimes = 1;

  let addition = (`${options.addition}${options.additionSeparator}`).repeat(options.additionRepeatTimes);
  let additions = addition.substr(0, addition.length - options.additionSeparator.length);

  if (additions == 'undefined') additions = '';

  let result = (`${str}${additions}${options.separator}`).repeat(options.repeatTimes);
  let results = result.substr(0, result.length - options.separator.length);

  return results;
};
