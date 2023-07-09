const antiCase = (s) => {
  if (typeof s !== 'string') { return undefined };
  let newS = '';
  for (let i = 0; i < s.length; i++) {
    newS += (/^[A-Z]*$/.test(s.charAt(i))) ? s.charAt(i).toLowerCase() : s.charAt(i).toUpperCase();
  } //       ^^^^^^^^^^^^^^^^ regex🤯 ^ https://stackoverflow.com/a/40796345/
  return newS;
}

console.log(antiCase('JavaScript'));
console.log(antiCase('QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasfghjklzxcvbnm'));
console.log(antiCase('ëÿüïöäúíóáêûîôâåõãñßπËŸÜÏÖÄÊÛÎÔÂÅõãñ∏'));
console.log(antiCase('123567890-=[]\'\\,./§!@#$%^&*()_+{}:"|<>?'));