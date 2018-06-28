// ret index; else undefined
const indexFinder =  function (prop, value, arr) {
  for (var key = 0; key < arr.length; key++) {
    if (arr[key][prop] == value) {
      return key;
    }
  }
};

export {indexFinder};