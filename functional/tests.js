/* global describe, it, assert, sum, multiply, reverse, filterLongWords */

describe('Functional Programming', function() {
    it('Expected output of sum([9, 8, 7, 6]) is 30', function() {
        assert.equal(sum([9, 8, 7, 6]), 30);
    });

    it('Expected output of multiply([3, 2, 3]) is 18', function() {
        assert.equal(multiply([3, 2, 3]), 18);
    });

    it('Expected output of reverse(ratset gaj) is jag testar', function() {
        assert.equal(reverse("ratset gaj"), "jag testar");
    });
    it('Expected output of reverse(programming) is gnimmargorp', function() {
        assert.equal(reverse("programming"), "gnimmargorp");
    });

    it('Expected output of filterLongWords([Web, Application, Programmings], 4) is [Application, Programmings]', function() {
        assert.deepEqual(filterLongWords(["Web", "Application", "Programmings"], 4), ["Application", "Programmings"]);
    });
});