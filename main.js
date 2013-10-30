var Account = function(current_balance, owner_name) {
	this.current_balance = current_balance;
	this.owner_name = owner_name;

	this.deposit = function(deposit) {
		return current_balance = current_balance + deposit;
	};

	this.withdrawal = function(withdrawal) {
		return current_balance = current_balance - withdrawal;
	};

};

var Bank = {
	accounts: [],

	enroll_new_account: function(current_balance, owner_name) {
			var new_account = new Account(current_balance, owner_name);
	    this.accounts.push(new_account);
	    return new_account;
	},

	total_deposits: function(accounts) {
	  var balances = this.accounts.map( function(account) { return account.balance });
    return balances.reduce(function(a, b) { return a + b });
	}


};



// new accounts
dans_acct = new Account("Dan", 1000);
cindys_acct = new Account("Cindy", 1000);

// new bank
Bank.enroll_new_account(dans_acct);
Bank.enroll_new_account(cindys_acct);

console.log(Bank.total_deposits)
