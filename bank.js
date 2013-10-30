// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs a `enroll_new_account` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. Note what Tom taught this evening for inherietance and create/cloning. 

// #### Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance. 

// There is no need to write a user interface. Make sure functions return values instead of print them. However, you should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected. 

var bank = { 
	accounts: [
	{owner: "Amal", balance: 1000}, 
	{owner:"Kamal", balance: 2000}, 
	{owner: "Jamal", balance: 3000}
	], 
	total_money: function() {
		var balances = (this.accounts.map(function(account){return account.balance}));
		var sum = 0; 
		balances.forEach(function(value){ sum += value; });
		return sum
	}
}

bank.__proto__ = account

var account = {

	this.owner = this.accounts.map(function(account){return account.owner});
}

