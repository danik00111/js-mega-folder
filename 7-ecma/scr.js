//. f && f === f
//. T && f === f
//. f && T === f
//. T && T === T
//. f || f === f
//. T || f === T
//. f || T === T
//. T || T === T
//. !T === f
//. !f === T
//. f ^ f === f
//. T ^ f === T
//. f ^ T === T
//. T ^ T === f

const pr = prompt('What\'s JavaScript\'s official name?')
// if (pr === 'ECMAScript') {
//   alert('Indeed! It\'s "ECMAScript".')
// } else {
//   alert('No. It\'s "ECMAScript".')
// }
alert(`${(pr === 'ECMAScript') ? 'Indeed!' : 'No.'} It's "ECMAScript".`)