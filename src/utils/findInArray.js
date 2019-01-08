export default (() => {
  if ([].indexOf) {
    return function(array, value) {
      return array.indexOf(value);
    };
  } else {
    return function(array, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
      }

      return -1;
    };
  }
})();
