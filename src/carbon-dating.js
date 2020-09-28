const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let parseNumber = parseFloat(sampleActivity);
  let out = (Math.ceil((Math.log(MODERN_ACTIVITY / parseNumber)) / (0.693 / HALF_LIFE_PERIOD)));
  if (parseNumber == 0 || parseNumber < 0 || parseFloat > 1000) {
    return false;
  }
  if (typeof sampleActivity == 'string' && parseNumber > 0) {
    return (out > 0) ? out : false;
  } else {
    return false;
  }
};

