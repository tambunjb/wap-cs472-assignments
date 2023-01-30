/* global Account */
// eslint-disable-next-line no-unused-vars
class SavingsAccount extends Account {
    
    constructor(number, interest) {
        super(number);
        this.setInterest(interest);
    }
    
    getInterest() {
        return this.interest;
    }

    setInterest(interest) {
        this.interest = interest;
    }

    addInterest() {
        super.deposit(super.getBalance()*this.getInterest()/100);
    }

    toString() {
        return "Savings Account " + super.getNumber() + ": balance " + super.getBalance();
    }

    endOfMonth() {
        return 'Interest added SavingsAccount ' + super.getNumber() + ': balance: ' + super.getBalance() + ' interest: ' + (super.getBalance()-(super.getBalance()*100/(this.getInterest()+100)));
    }
}