Object.defineProperty(Array.prototype, 'filtre', {
  value: function (a, b) {
    return this.filter(x => (
        (
          x >= (
            (a * (a < b))
            +
            (b * (a >= b))
          )
        ) && (
          x <= (
            (a * (a >= b))
            +
            (b * (a < b))
          )
        )
      )
    );
  }
});

console.log([4, 6, 2].filtre(1, 5));
console.log([9, 2, 1, 5, 6].filtre(8, 3));
