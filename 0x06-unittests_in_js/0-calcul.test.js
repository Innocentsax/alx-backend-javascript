const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Tests calculateNumber function:", function() {
    describe("Calculates two integers:", function() {
        it('Returns 4.', function() {
            assert.strictEqual(calculateNumber(1, 3), 4);
        });
    });
    describe("Calculates one float & one integer:", function() {
        it('Returns 5.', function() {
            assert.strictEqual(calculateNumber(1, 3.7), 5);
        });
    });
    describe("Calculates one float & one integer (round down):", function() {
        it('Returns 4.', function() {
            assert.strictEqual(calculateNumber(1, 3.3), 4);
        });
    });
    describe("Calculates one float & one int reversed:", function () {
    it('Returns 5.', function () {
      assert.strictEqual(calculateNumber(3.7, 1), 5);
    });
  });
    describe("Calculates two floats:", function() {
        it('Returns 5.', function() {
            assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        });
    });
    describe("Calculates two floats w/borderline:", function() {
        it('Returns 6.', function() {
            assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        });
    });
});
