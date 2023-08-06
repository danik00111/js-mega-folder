const pockH = document.querySelector('.pock');
const bankH = document.querySelector('.bank');
const withI = document.querySelector('#withInp');
const depoI = document.querySelector('#depoInp');
const withB = document.querySelector('#with');
const depoB = document.querySelector('#depo');
let bankAccount = {
  ownerName: 'MorraMay',
  accountID: 0x4ba957c20,
  Balance: 5000,
  Withdraw() {
    withamt = withI.innerHTML;
    if(withamt > this.Balance) { // if don't have enough in bank to withdraw
      bankH.classList.add('errorshake');
      console.log('you dont have that much')
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
    console.log('errors zero :trollface:');
    console.log('this.bal:', this.Balance);
    console.log('this.bal:', this.Balance);
    console.log('bankh inner:', bankH.innerHTML);
    console.log('pockh inner:', pockH.innerHTML);
    console.log('withamt:', withamt);
    this.Balance -= withamt;
    bankH.innerHTML = this.Balance; // update bank amount visible in html
    pockH.innerHTML = parseInt(pockH.innerHTML) + withamt;
    return withamt;
  },
  // Deposit() {

  // },
}
bankH.innerHTML = bankAccount.Balance; // init bank amount visible in html

$("#withInp").keypress(function (event) { // when key in with input
  if (event.keyCode === 13) { // if key enter
    $("#with").click(); // execute with code
  }
});
$("#with").click(bankAccount.Withdraw); // yeah
// $("#depoInp").keypress(function (event) { // when key in depo input
//   if (event.keyCode === 13) { // if key enter
//     $("#depo").click(); // execute depo code
//   }
// });
// $("#depo").click(bankAccount.Deposit); // yeah