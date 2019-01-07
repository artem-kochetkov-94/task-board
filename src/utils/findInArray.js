export default function(array, value) {
  if ([].indexOf) {
    return array.indexOf(value);
  } else {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }

    return -1;
  }
}
