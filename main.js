var Bank = {
	accounts: [
	{name: "Matt Clement", balance: 1000},
	{name: "Abby Howell", balance: 500},
	{name: "Blake Ruddock", balance: 100.68}
	],
	// all_accounts: function() {
	// 	return this.accounts.length;
	// }
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
		this.accounts.push({name: name, balance: balance});
		return "Account added.";
	}
}


