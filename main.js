var Account = function(current_balance, owner_name) {
  	this.current_balance = current_balance;
  	this.owner_name = owner_name;
  	this.kind = 'account';
  	this.deposit = function(amount){
  		this.current_balance = this.current_balance + amount;
  		return this.current_balance;
  	};
    this.withdrawal = function(amount){
    	
    	if (amount <= current_balance) {
    		this.current_balance = this.current_balance - amount;
    		return this.current_balance;
    	}
    	else {
        return "transaction denied.";
    	}
    };
  };

var Bank = {
	accounts: [
	  {current_balance: 500, owner_name: "Tom"},
    {current_balance: 700, owner_name: "Teddy"},
    {current_balance: 400, owner_name: "Tina"},
    {current_balance: 600, owner_name: "Trevor"}
	],
	enroll_new_account: function(account) {
		this.accounts.push(account);
	},
	all_account_owners: function(){
		return this.accounts.map(function(account){return account.owner_name;});
	},
	transfer: function(from_account, to_account, balance){
		from_account.withdrawal(amount);
		to_account.deposit(amount);
		return "Your transfer was successful. " + to_account.owner_name + " now has $" to_account.current_balance + ".00";
	}
};


var my_new_account = new Account(450, 'Abby');

console.log(my_new_account.kind);

Bank.enroll_new_account(my_new_account);

console.log(Bank.all_account_owners());

console.log(my_new_account.owner_name);
console.log(my_new_account.current_balance);
console.log(my_new_account.deposit(55));
console.log(my_new_account.current_balance);
console.log(my_new_account.withdrawal(20));
console.log(my_new_account.current_balance);
console.log(my_new_account.withdrawal(1000));

var matts_account = new Account(600, 'Matt');
Bank.enroll_new_account(matts_account);
console.log(Bank.transfer(matts_account, my_new_account, 35));


