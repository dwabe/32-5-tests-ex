const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('windFactor', () => {
    it('should return 0 if value is NaN', () => {
      const actual = calculateTotalPoints(227.5, 225, [18, 18.5, 17.5, 18.5, 18.5], 200, 'string', -8.5);

      const exptected = 199.5;

      assert.equal(actual, exptected);
    });
    it('should convert string to number if possible', () => {
      const actual = calculateTotalPoints(227.5, 225, [18, 18.5, 17.5, 18.5, 18.5], 200, '8.5', -8.5);

      const exptected = 208;

      assert.equal(actual, exptected);
    });
  });
  describe('gateFactor', () => {
    it('should return 0 if value is NaN', () => {
      const actual = calculateTotalPoints(227.5, 225, [18, 18.5, 17.5, 18.5, 18.5], 200, 8.5, 'string');

      const exptected = 216.5;

      assert.equal(actual, exptected);
    });
    it('should convert string to number if possible', () => {
      const actual = calculateTotalPoints(227.5, 225, [18, 18.5, 17.5, 18.5, 18.5], 200, 8.5, "-8.5");

      const exptected = 208;

      assert.equal(actual, exptected);
    });
  });
});