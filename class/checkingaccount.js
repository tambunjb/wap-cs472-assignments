/* global Account */
// eslint-disable-next-line no-unused-vars
class CheckingAccount extends Account {
    
    constructor(number, overdraft) {
        super(number);
        this.setOverdraft(overdraft);
    }
    
    getOverdraft() {
        return this.overdraft;
    }

    setOverdraft(overdraft) {
        this.overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this.getOverdraft()) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + super.getNumber() + ": balance " + super.getBalance();
    }

    endOfMonth() {
        if(super.getBalance() < 0) {
            return 'Warning, low balance CheckingAccount ' + super.getNumber() + ': balance: ' + super.getBalance() + ' overdraft limit: ' + this.getOverdraft();
        }
        return '';
    }

}