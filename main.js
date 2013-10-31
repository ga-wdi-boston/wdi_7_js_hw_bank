var Account = function(current_balance, owner_name) {
	this.current_balance = current_balance;
	this.owner_name = owner_name;

	this.deposit = function(deposit) {
		return current_balance = current_balance + deposit;
	},

	this.withdrawal = function(withdrawal) {
		return current_balance = current_balance - withdrawal;
	}

};

var Bank = {
	accounts: [],

	enroll_new_account: function(account) {
	    this.accounts.push(account);
	},

	total_deposits: function() {
    return this.accounts.map(function(account){ return account.current_balance; }).reduce(function(x, y){ return x + y; });
  }
};



// new accounts
dans_acct = new Account(1000, "Dan");
cindys_acct = new Account(1000, "Cindy");


// new bank
Bank.enroll_new_account(dans_acct);
Bank.enroll_new_account(cindys_acct);



console.log(dans_acct.current_balance);
console.log(cindys_acct.current_balance);


console.log(Bank.total_deposits());
