var bank = {
	accounts:[
	{name: "Bobby" balance: 1000 },
	{name: "Bryce" balance: 2000 },
	{name: "Tom" balance: 4000.50}
	],
	  enroll_new_account: function(account) {
	          this.accounts.push(account);
	  },
	  account_owners: function(){
	          return this.accounts.map(function(account){return account.owner_name;});
	  },
	  transfer: function(from_account, to_account, amount){
	          from_account.withdrawal(amount);
	          to_account.deposit(amount);
	  }
};

}