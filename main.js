var Account = function(name, balance){
	this.name = name;
	this.balance = balance;
	this.deposit = function(amount) {
		balance += amount;
		return "New balance is " + balance;
	},
	this.withdrawal = function(amount){
		if ((balance - amount) < 0) {
			return "Insufficient funds.";
		}
		else {
			balance -= amount;
			return "New balance is " + balance;
		}
	}
}

var Bank = {
	accounts: [],
	sum_accounts: function() {
		var max, x, total;
		max = this.accounts.length;
		x = 0;
		total = 0;
		for(; x < max;) {
			total = total + this.accounts[x].balance;
			x = x + 1;
		}
		return total;
	},
	enroll_new_account: function(name, balance) {
		this.accounts.push(new Account(name, balance));
		return "Account added.";
	}
}