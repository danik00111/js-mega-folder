let user = {
  Name: 'danik0011',
  Password: 'Qwerty', // i dont actually use this password
  Email: 'kremenskiydaniil@gmail.com',
  Check: function(pas,eml) {
    return (pas===this.Password && eml===this.Email);
  }
}

document.querySelector('#butter').addEventListener('click', () => {
  let inputpas = document.querySelector('#password').value;
  let inputeml = document.querySelector('#email').value;
  document.querySelector('.output').innerHTML = user.Check(inputpas, inputeml);
  document.querySelector('.output').classList.remove('right');
  document.querySelector('.output').classList.remove('nulle');
  if(user.Check(inputpas, inputeml)) {
    document.querySelector('.output').classList.add('right');
  }
});