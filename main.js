var Account = function (name, balance) {
        "use strict";
        this.name = name;
        this.balance = balance;
        this.deposit = function (amount) {
            this.balance = this.balance + amount;
            return "New balance is " + this.balance;
        };
        this.withdrawal = function (amount) {
            if ((this.balance - amount) < 0) {
                return "Insufficient funds.";
            }
            else {
                    this.balance = this.balance - amount;
                    return "New balance is " + this.balance;
                }
        };
    };

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