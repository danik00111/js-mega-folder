const login = (a,b,c) => {
  document.getElementById('name').disabled = true;
  document.getElementById('email').disabled = true;
  document.getElementById('password').disabled = true;
  document.getElementById('submit').disabled = true;
  localStorage.setItem('userdatareal',JSON.stringify({ name:a, email:b, password:c }));
  alert(`logged in as ${a} [${b}]!`);
}

const userdata = JSON.parse(localStorage.getItem('userdatareal'));

if(!!(userdata.name) && !!(userdata.email) && !!(userdata.password))
  if(confirm(`re-login as ${userdata.name} [${userdata.email}]?`))
    login(userdata.name, userdata.email, userdata.password);


/* STABLE VERSION:

const login = (a,b,c) => {
  document.getElementById('name').disabled = true;
  document.getElementById('email').disabled = true;
  document.getElementById('password').disabled = true;
  document.getElementById('submit').disabled = true;
  localStorage.setItem('name',a);
  localStorage.setItem('email',b);
  localStorage.setItem('password',c);
  alert(`logged in as ${a} [${b}]!`);
}
if(!!(localStorage.getItem('name')) && !!(localStorage.getItem('email')) && !!(localStorage.getItem('password')))
  if(confirm(`re-login as ${localStorage.getItem('name')} [${localStorage.getItem('email')}]?`))
    login(localStorage.getItem('name'),localStorage.getItem('email'),localStorage.getItem('password'));

*/