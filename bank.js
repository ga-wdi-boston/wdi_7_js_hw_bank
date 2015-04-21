var Bank = {
	accounts: new Array(),
	enroll_new_account: function(name, balance) {
		this.accounts.push(new Account(name, balance));
	},
	totz_dollaz: function() {
    return this.accounts.map(function(account){ return account.balance; }).reduce(function(x, y){ return x + y; });
	}
};

var Account = function (name, balance) {
	this.name = name;
	this.balance = balance;

	this.deposit = function(amount) {
		this.balance = this.balance + amount;
		return this.balance;
	};
	this.withdraw = function(amount) {
		return this.balance - amount >= 0 ? this.balance -= amount : "not enough $$$";
	};
	this.transfer = function(amount, to) {
		this.balance = this.balance - amount;
		to.balance = to.balance + amount;
	};
};

Bank.enroll_new_account('Bryce', 100);
Bank.enroll_new_account('Marisa', 500);