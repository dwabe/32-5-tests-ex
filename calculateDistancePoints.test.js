const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('totalDistancePoints', () => {
    it('should return 0 if totalScore is negative number', () => {
      const actual = calculateDistancePoints(0, 225, 200);

      const exptected = 0;

      assert.equal(actual, exptected);
    });
  });
  describe('distance', () => {
    it('should return 0 if value is NaN', () => {
      const actual = calculateDistancePoints('string', 225, 200);

      const exptected = 0;

      assert.equal(actual, exptected);
    });
    it('should return 0 if value is incorrect', () => {
      const actual = calculateDistancePoints(-1, 225, 200);

      const exptected = 0;

      assert.equal(actual, exptected);
    });
    it('should convert string to number if possible', () => {
      const actual = calculateDistancePoints('227', 225, 200);

      const exptected = 152.4;

      assert.equal(actual, exptected);
    });
  });
  describe('hillSize', () => {
    it('should return 0 if value is NaN', () => {
      const actual = calculateDistancePoints(227, 'string', 200);

      const exptected = 87;

      assert.equal(actual, exptected);
    });
    it('should return 0 if value is incorrect', () => {
      const actual = calculateDistancePoints(227, -1, 200);

      const exptected = 87;

      assert.equal(actual, exptected);
    });
    it('should convert string to number if possible', () => {
      const actual = calculateDistancePoints(227, '225', 200);

      const exptected = 152.4;

      assert.equal(actual, exptected);
    });
  });
  describe('kPoints', () => {
    it('should return 0 if value is NaN', () => {
      const actual = calculateDistancePoints(227, 225, 'string');

      const exptected = 392.4;

      assert.equal(actual, exptected);
    });
    it('should return 0 if value is incorrect', () => {
      const actual = calculateDistancePoints(227, 225, -1);

      const exptected = 392.4;

      assert.equal(actual, exptected);
    });
    it('should convert string to number if possible', () => {
      const actual = calculateDistancePoints(227, 225, "200");

      const exptected = 152.4;

      assert.equal(actual, exptected);
    });
  });
});