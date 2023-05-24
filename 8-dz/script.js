document.querySelector('.button').addEventListener('click', () => {
  let balance = parseFloat(document.querySelector('.balance').value);
  let payment = parseFloat(document.querySelector('.payment').value);
  alert(`Alright, that will be $${payment}. You currently have $${balance}.`)
  if (balance < payment) {
    alert("It seems that you're too broke to afford that.");
  } else {
    balance -= payment;
    alert(`You paid $${payment} and now have $${balance}.`);
    document.querySelector('.balance').value = balance;
    document.querySelector('.payment').value = 0;
  }
})