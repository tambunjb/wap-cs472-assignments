/* global Account, SavingsAccount, CheckingAccount */
// eslint-disable-next-line no-unused-vars
class Bank {
    static nextNumber = 1000;
    
    constructor() {
        this._accounts = [];
    }

    addAccount() {
        let number = Bank.nextNumber++;
        this._accounts.push(new Account(number));
        return number;
    }

    addSavingsAccount(interest) {
        let number = Bank.nextNumber++;
        this._accounts.push(new SavingsAccount(number, interest));
        return number;
    }

    addCheckingAccount(overdraft) {
        let number = Bank.nextNumber++;
        this._accounts.push(new CheckingAccount(number, overdraft));
        return number;
    }

    closeAccount(number) {
        let index = this._accounts.indexOf(a => a.getNumber()===number);
        this._accounts.splice(index, 1);
    }

    accountReport() {
        return this._accounts.reduce((i, j) => i + j.toString()+'\n', '');
    }

    endOfMonth() {
        return this._accounts.reduce((i, j) => i + j.endOfMonth()+(j.endOfMonth()!==''?'\n':''), '');
    }
}