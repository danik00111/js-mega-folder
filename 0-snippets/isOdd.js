const isOdd = function(x) {
  switch(true) {
    case(x%2 === 1):
      return true;
    case(x%2 === 0):
      return false;
    default:
      return NaN;
  }
}
// im bored