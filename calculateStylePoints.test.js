const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  describe('styleNotes', () => {
    it('should return 0 if value is NaN', () => {
      const actual = calculateStylePoints(['string', 17, 16.5, 16, 18]);

      const exptected = 49.5;

      assert.equal(actual, exptected);
    });
    it('should return 0 if value is incorrect', () => {
      const actual = calculateStylePoints([-1, 17, 16.5, 16, 18]);

      const exptected = 49.5;

      assert.equal(actual, exptected);
    });
    it('should return 0 if value is too high', () => {
      const actual = calculateStylePoints([21, 17, 16.5, 16, 18]);

      const exptected = 49.5;

      assert.equal(actual, exptected);
    });
    it('should return 0 if value is too low', () => {
      const actual = calculateStylePoints([0, 17, 16.5, 16, 18]);

      const exptected = 49.5;

      assert.equal(actual, exptected);
    });
    it('should return 0 if value wrong (for example 15.4)', () => {
      const actual = calculateStylePoints([15.4, 17, 16.5, 16, 18]);

      const exptected = 49.5;

      assert.equal(actual, exptected);
    });
    it('should convert string to number if possible', () => {
      const actual = calculateStylePoints(['12', 17, 16.5, 16, 18]);

      const exptected = 49.5;

      assert.equal(actual, exptected);
    });
  });
});