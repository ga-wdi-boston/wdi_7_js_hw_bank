// bank object
var Bank = {
  accounts: [],
  total_sum_of_money: function() {
    return this.accounts.map(function(acct){ return acct.balance; }).reduce(function(x, y){ return x + y; });
  },
  enroll_new_account: function(account) {
    this.accounts.push(account);
  },
  account_holder_list: function() {
    return this.accounts.map(function(acct){ return acct.owner; });
  }
};

// account constructor
var Account = function(owner, initial_deposit) {
  this.owner = owner;
  this.balance = initial_deposit;
};

// account methods
Account.prototype.deposit = function(amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function(amount) {
  if (amount > this.balance) { 
    this.overdraft_protection();
  } else {
    this.balance -= amount;
  }
};

Account.prototype.transfer = function(amount, account) {
  if (amount > this.balance) { 
    this.overdraft_protection();
  } else {
    this.balance -= amount;
    account.balance += amount;
  }
};

Account.prototype.overdraft_protection = function(amount, account) {
  return "Sorry, there is not enough money to complete this transaction. You only have $" + this.balance + " in your account.";
};

// account initialization
account1 = new Account("John Q Private", 250);
account2 = new Account("Stone Cold Jane Austen", 1000);
account3 = new Account("Sheldon Doe", 475);
account4 = new Account("Satoshi Nakamoto", 88888888);

// bank initialization
Bank.enroll_new_account(account1);
Bank.enroll_new_account(account2);
Bank.enroll_new_account(account3);
Bank.enroll_new_account(account4);

// testing deposit
console.log(account1.balance);
account1.deposit(250);
console.log(account1.balance);

// testing withdrawal
console.log(account2.balance);
account2.withdraw(750);
console.log(account2.balance);

// testing overdraft
console.log(account3.balance);
account3.withdraw(500);
console.log(account3.balance);

// testing transfer
console.log(account4.balance);
console.log(account3.balance);
account4.transfer(888, account3);
console.log(account4.balance);
console.log(account3.balance);

// testing account holder listing
console.log(Bank.account_holder_list());

// testing bank's total reserve
console.log(Bank.total_sum_of_money());
