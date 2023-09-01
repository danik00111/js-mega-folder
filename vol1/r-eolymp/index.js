console.log(`
  Input: 6 numbers, divided by spaces,
  where first 3 are x, y, and radius of a circle,
  and the last 3 are x/y/r of another circle.
  Output: amount of places where the circles intersect (-1 if ∞).
  Includes the edge cases of a circle's center being in the other circle.
  Type ".exit" to exit.
`)
process.stdin.on("data", data => {
  if(String(data) === '.exit\n') {
    process.exit();
  }
  let e = String(data).split(" ");
  if (e[e.length - 1].endsWith('\n')) {
    e[e.length - 1] = e[e.length - 1].slice(0, -1);
  }
  let distanceCenters = Math.sqrt( Math.pow((e[0] - e[3]), 2) + Math.pow((e[1] - e[4]), 2) );
  // sqrt( (x_a – x_b)^2 + (y_a – y_b)^2 )
  let radiiSum = parseFloat(e[2]) + parseFloat(e[5]);
  switch(true) {
    case (e[0] === e[3] && e[1] === e[4] && e[2] === e[5]): // circles are basically the same
    console.log(-1);break;
    case (e[0] === e[3] && e[1] === e[4] && e[2] !== e[5]): // same position different radius
    console.log(0); break;
    case (distanceCenters > radiiSum): // circles too far
    console.log(0); break;
    case (distanceCenters === radiiSum): // circles tangent
    console.log(1); break;
    case (distanceCenters < radiiSum && !(distanceCenters < e[2] || distanceCenters < e[5])): // circles intersect
    console.log(2); break;
    case (distanceCenters < e[5]): // center of c1 inside c2
    switch(true) { // "e[5] - distanceCenters" is the shortest distance from c1's center to the edge of c2
      case (e[5] - distanceCenters < e[2]):
        console.log(2); break;
      case (e[5] - distanceCenters === e[2]):
        console.log(1); break;
      case (e[5] - distanceCenters > e[2]):
        console.log(0); break;
    }
    break;
    case (distanceCenters < e[2]): // center of c2 inside c1
    switch(true) {
      case (e[2] - distanceCenters < e[5]):
        console.log(2); break;
      case (e[2] - distanceCenters === e[5]):
        console.log(1); break;
      case (e[2] - distanceCenters > e[5]):
        console.log(0); break;
    }
    case (distanceCenters <= e[5]): // center of c1 ON c2
      console.log((e[2] === 0) ? 1 : 2); // 2 intersetion points, unless if radius of c1 is 0 then uhhhhhhhh 1 ig
    break;
    case (distanceCenters <= e[2]): // center of c2 ON c1
      console.log((e[5] === 0) ? 1 : 2); // 2 intersetion points, unless if radius of c2 is 0 then uhhhhhhhh 1 ig
    break;
    default:
      console.log('Something unexpected happened.');
    break;
  }
});

/*
  e[0] = circle 1 x
  e[1] = circle 1 y
  e[2] = circle 1 radius
  e[3] = circle 2 x
  e[4] = circle 2 y
  e[5] = circle 2 radius
*/

/* process.stdin.on("data", data => {
  if(String(data) === '.exit\n') {
    process.exit();
  }
  let e = String(data).split("\n")[1].split(" ").map(item => +item);
  let distanceCenters = Math.sqrt(Math.pow((e[0] - e[3]), 2) + Math.pow((e[1] - e[4]), 2));
  console.log(distanceCenters);
  let radiiSum = e[2] + e[5];

  switch (true) {
    case (e[0] === e[3] && e[1] === e[4] && e[2] === e[5]):
      console.log(-1); break;
    case (e[0] === e[3] && e[1] === e[4] && e[2] !== e[5]):
      console.log(0); break;
    case (distanceCenters > radiiSum):
      console.log(0); break;
    case (distanceCenters = radiiSum):
      console.log(1); break;
    case (distanceCenters > radiiSum):
      console.log(2); break;
  }
}); */
// works on eolymp