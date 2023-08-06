const pockH = document.querySelector('.pock');
const bankH = document.querySelector('.bank');
const withI = document.querySelector('#withInp');
const depoI = document.querySelector('#depoInp');
let withamt;
let depoamt;
let bankAccount = {
  ownerName: 'MorraMay',
  accountID: 0x4ba957c20,
  Balance: 5000,
  Withdraw: function() {
    withamt = parseInt(withI.value);
    if(withamt > this.Balance) { // if don't have enough in bank to withdraw
      bankH.classList.add('errorshake');
      setTimeout(()=> {
        bankH.classList.remove('errorshake');
      }, 500);
      return; // early exit
    }
    if(withamt <= 0 || isNaN(withamt)) { // if zero
      withI.classList.add('errorshake');
      setTimeout(()=> {
        withI.classList.remove('errorshake');
      }, 500);
      return; // early exit
    }
    this.Balance -= withamt;
    bankH.innerHTML = this.Balance; // update bank amount visible in html
    pockH.innerHTML = parseInt(pockH.innerHTML) + withamt;
    // update pocket amount visible in html
    return withamt;
  },
  Deposit: function() {
    depoamt = parseInt(depoI.value);
    if(depoamt > pockH.innerHTML) { // if don't have enough in pocket to deposit
      pockH.classList.add('errorshake');
      setTimeout(()=> {
        pockH.classList.remove('errorshake');
      }, 500);
      return; // early exit
    }
    if(depoamt <= 0 || isNaN(depoamt)) { // if zero
      depoI.classList.add('errorshake');
      setTimeout(()=> {
        depoI.classList.remove('errorshake');
      }, 500);
      return; // early exit
    }
    this.Balance += depoamt;
    bankH.innerHTML = this.Balance; // update bank amount visible in html
    pockH.innerHTML = parseInt(pockH.innerHTML) - depoamt;
    // update pocket amount visible in html
    return depoamt;
  },
}
bankH.innerHTML = bankAccount.Balance; // init bank amount visible in html

withI.addEventListener("keyup", function (event) { // when key
    event.preventDefault(); // just in case
    if (event.keyCode === 13) { // if key enter
      bankAccount.Withdraw(); // do it
}});
depoI.addEventListener("keyup", function (event) { // when key
    event.preventDefault(); // just in case
    if (event.keyCode === 13) { // if key enter
      bankAccount.Deposit(); // do it
}});