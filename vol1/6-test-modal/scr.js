document.querySelector('.modal').classList.add('invis');
document.querySelector('.loading').classList.remove('loading');
document.querySelector('#buttob').addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('invis');
  document.querySelector('#fadp').classList.add('fade');
})
document.querySelector('.confirm').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('invis');
  document.querySelector('#fadp').classList.remove('fade');
  console.log(true);
})
document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('invis');
  document.querySelector('#fadp').classList.remove('fade');
  console.log(false);
})