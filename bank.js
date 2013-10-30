var Account = function (owner, current_balance) {
	this.owner = owner;
	this.current_balance = current_balance;
	this.deposit = function (x) {
		this.current_balance = this.current_balance + x;
		return this.current_balance;
		console.log(this.current_balance);
	};

	this.withdraw = function (x) {
		if (this.current_balance = this.current_balance - x) {
			return this.current_balance;
			console.log(this.current_balance);
		}
		else {
			return "You don't have enough money for the withdrawal."
		}
	};
};

var Bank = {
	accounts: [
		{owner: "David", current_balance: 5000 },
		{owner: "Dan", current_balance: 7500 },
		{owner: "Rahul", current_balance: 6600 },
		{owner: "Amal", current_balance: 10500 },
		{owner: "Matt", current_balance: 5500 },
		{owner: "Bryce", current_balance: 6400 }
	],
	total_sum: function () {
		var balances = this.accounts.map(function(account){ return account.current_balance});
		var all_sum = 0;
		balances.forEach(function(value){ all_sum += value});
		return all_sum
	},
	enroll_new_account: function (owner, current_balance) {
		var new_account = new Account(owner, current_balance);
		this.accounts.push(new_account);
		return new_account;
		console.log(accounts);
	}
}