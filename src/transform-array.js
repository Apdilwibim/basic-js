const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  let discardNext = '--discard-next',
    discardPrev = '--discard-prev',
    doubleNext = '--double-next',
    doublePrev = '--double-prev';
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    if (i == 0 && newArr[i] == discardPrev) newArr.splice(i, 1);
    if (i == newArr.length - 1 && newArr[i] == discardNext) newArr.splice(i, 1);
    if (i == 0 && newArr[i] == doublePrev) newArr.splice(i, 1);
    if (i == newArr.length - 1 && newArr[i] == doubleNext) newArr.splice(i, 1);
    if (newArr[i] == discardNext) newArr.splice(i, 2, null, null);
    if (newArr[i] == discardPrev) newArr.splice(i - 1, 2, null, null);
    if (newArr[i] == doubleNext) newArr.splice(i, 1, newArr[i + 1]);
    if (newArr[i] == doublePrev) newArr.splice(i, 1, newArr[i - 1]);
  }
  return newArr.filter((item) => {
    return (item != null)
  });
}
