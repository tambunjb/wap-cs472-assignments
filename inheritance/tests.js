/* global describe, it, assert */

describe('Define a filter function on the String object. The function accepts an array of strings that specifies a list of banned words. The function returns the string after removing all the banned words.', function() {
    it('Expected output of "This house is not nice!".filter(\'not\') is "This house is nice!"', function() {
        assert.equal("This house is not nice!".filter('not'), "This house is nice!");
    });

    it('Expected output of "This house is not nice!".filter(\'not\', \'house\', \'This\') is "is nice!"', function() {
        assert.equal("This house is not nice!".filter('not', 'house', 'This'), "is nice!");
    });
});

describe('Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted.', function() {
    it('Expected output of [6, 4, 0, 3, -2, 1].bubbleSort() is [-2, 0, 1, 3, 4, 6]', function() {
        assert.deepEqual([6, 4, 0, 3,-2,1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    });

    it('Expected output of [900, 99, 9, -99, 0, 0].bubbleSort() is [-99, 0, 0, 9, 99, 900]', function() {
        assert.deepEqual([900, 99, 9, -99, 0, 0].bubbleSort(), [-99, 0, 0, 9, 99, 900]);
    });
});