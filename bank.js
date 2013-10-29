var Account = function (owner, current_balance) {
	this.owner = owner;
	this.current_balance = current_balance;
	this.deposit = function (x) {
		this.current_balance = this.current_balance + x;
		return this.current_balance;
		console.log(this.current_balance);
	},
	this.withdraw = function (x) {
		this.current_balance = this.current_balance - x;
		return this.current_balance;
		console.log(this.current_balance);
	}
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
		var total_sum;
		for (var i = 0; i < this.accounts.length; i = i + 1)
		{
			var total_sum = 0;
			total_sum = total_sum + this.account[i].current_balance;
			return total_sum
		}
		console.log(this.total_sum);
	},
	enroll_new_account: function (x, y) {
		new_account = new Account(x, y);
		this.accounts.push(new_account);
		console.log(accounts);
	}
}