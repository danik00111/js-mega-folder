/**
 * Generates a random number in the range of the two input numbers (inclusive).
 * @param {int} min
 * @param {int} max
 * @returns {int}
 */
function randInt(min,max){return Math.floor((Math.random()*(max-min+1))+min)};
/**
 * @returns {string} A random color, in the hex form (e.g. '#3f71a8').
 */
function getRandomColor(){return '#'+((randInt(0,256**3).toString(16)).padStart(6,'0'))};

for(let i=0;i<20;i++)
  console.log(getRandomColor());