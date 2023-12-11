Object.defineProperty(Array.prototype, 'filterRange', {
  value:function(a,b){return this.filter(x=>((x>=Math.min(a,b))&&(x<=Math.max(a,b))))}
});

console.log([4, 0, 5, 6, 2].filterRange(1, 5));
console.log([9, 2, 1, 5, 6].filterRange(8, 3));