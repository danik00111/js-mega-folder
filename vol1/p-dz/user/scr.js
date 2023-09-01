let user = {
  Name: 'danik0011',
  Password: 'Qwerty', // i dont actually use this password
  Email: 'kremenskiydaniil@gmail.com',
  Check: function(pas,eml) {
    return (pas===this.Password && eml===this.Email);
  }
}
let outputspan = document.querySelector('.output');
document.querySelector('#butter').addEventListener('click', () => {
  let inputpas = document.querySelector('#password').value;
  let inputeml = document.querySelector('#email').value;
  outputspan.innerHTML = user.Check(inputpas, inputeml);
  outputspan.classList.remove('right');
  outputspan.classList.remove('nulle');
  if(user.Check(inputpas, inputeml)) {
    outputspan.classList.add('right');
  }
});