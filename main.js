// Bank has an array of accounts
// Bank needs method total_money in each account
//Also needs method create_new_account that will create a new account in the array of accounts
//accounts have a current balance and the owner's name
//you should be able to deposit or withdraw from the account to change the balance

 var Bank = {
  Account: function(owners_name) {
    this.current_balance = 0;
    this.owners_name = owners_name;
  },
  //Making accounts an object with the account number as the key and the account information allows easy manipulation of accounts versus using an account array.
  accounts: {
    1: {current_balance: 900, owners_name: "bob"},
    2: {current_balance: 20, owners_name: "jimmy"}
  },
  //We want to be able to transfer an amount from account_a to account_b.
  //We want to check that account_a has enough money to execute the transfer
  //We want to use Number(var) to make sure that the user input is converted to a Number
  transfers: function(amount, account_from, account_to) {
      var from_balance = Bank.accounts[account_from].current_balance,
          to_balance = Bank.accounts[account_to].current_balance;

      if(Number(amount) <= from_balance) {

        Bank.accounts[account_from].current_balance = from_balance - Number(amount);
        Bank.accounts[account_to].current_balance = to_balance + Number(amount);
        return to_balance;

      } else {
        return "Sorry, you do not have enough money to transfer that amount.";
      }
  },


  // We want to create a new account given an owners name, and create an account number, so we can easily manipulate the account object.
  new_account: function(owners_name) {
    var number = 0;
    //Here we are incrementing a dummy number variable by 1 until the while loop finds an account number that is not already taken
    while(typeof Bank.accounts[number] !== "undefined"){
      number++;
    }
    Bank.accounts[number] = new Bank.Account(owners_name); //within bank accounts this is a new account with this number ; new account from the prototype
    return number;  
  },

  get_balance: function(account) {
    return Bank.accounts[account].current_balance;
  },

  deposit: function(amount, account) {
    var current_balance = Bank.accounts[account].current_balance,
        new_balance = current_balance + Number(amount);

    Bank.accounts[account].current_balance = new_balance;
    return new_balance;
  },

  withdraw: function(amount, account) {
    var current_balance = Bank.accounts[account].current_balance;

      if (Number(amount) <= current_balance) {
        var new_balance = current_balance - Number(amount);
        Bank.accounts[account].current_balance = new_balance;
        return new_balance;
      } else {
        return "Sorry, the amount you are trying to withdraw is higher than your current balance.";
      }

  }
}