const maxOfArray = (array) => {
  if(Array.isArray(array)){
    let biggest = -Infinity;
    for(i=0;i<array.length;i++) {
      if(array[i] > biggest) {
          biggest = array[i];
      }
    }
    return typeof(biggest) === 'number' ? biggest : NaN;
  } else { return NaN; }
}
// from d-max-of-array