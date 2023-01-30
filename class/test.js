/* global Bank, describe, it, assert */

describe('Bank Class', function() {
    let bank = new Bank();
    
    it('Expected output of bank.addAccount() is 1000', function() {
        assert.equal(bank.addAccount(), 1000);
    });

    it('Expected output of bank.addSavingsAccount(25) is 1001', function() {
        assert.equal(bank.addSavingsAccount(25), 1001);
    });

    it('Expected output of bank.addCheckingAccount(500) is 1002', function() {
        assert.equal(bank.addCheckingAccount(500), 1002);
    });
    console.log(bank.accountReport());
});