const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let k = [];
  if (!Array.isArray(members)) return false;
  for (let item of members) {
    if (typeof item == 'string') {
      k.push(item.trim()[0].toUpperCase());
    }
  }
  return (k.sort().join(''));
};
