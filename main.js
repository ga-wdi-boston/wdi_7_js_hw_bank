var Account = function(name, balance){

	this.name = name;
	this.balance = balance;

	this.deposit = function(amount) {
		this.balance = this.balance + amount;
		return this.balance;
	};

	this.withdraw = function(amount) {
		if (this.balance - amount > 0){
			this.balance = this.balance - amount;
			return this.balance;
		} else {
			return "You have insufficent funds to make this withdrawal";
		}
	};

    };


var Bank = {

	accounts: new Array(),
	enroll_new_account: function(name, balance) {
		var new_account = new Account(name, balance);
		this.accounts.push(new_account);
		return new_account;
	},
	account_deposit: function(amount) {
		this.accounts[name]
	},
	total_balance: function() {
		var balances = this.accounts.map( function(account) { return account.balance });
		return balances.reduce(function(a, b) { return a + b });
	},
	account_search: function(value) {
		var i = 0;
		while (i < this.accounts.length) {
			if (this.accounts[i].name === value) {
				return i;
			} else {
				i = i + 1;
			}
		}
    },
    transfer: function(sender, recipient, value) {
    	var sender = this.account_search(sender);
    	var recipient = this.account_search(recipient);
    	this.accounts[sender].withdraw(value);
    	this.accounts[recipient].deposit(value);
    	var summary = {};
    	summary[this.accounts[sender].name] = this.accounts[sender].balance;
    	summary[this.accounts[recipient].name] = this.accounts[recipient].balance;
    	return summary;
    }
};




// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs a enroll_new_account method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. Note what Tom taught this evening for inherietance and create/cloning.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values instead of print them. However, you should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected.