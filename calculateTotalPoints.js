const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, styleNotes, kPoint, windFactor, gateFactor, ) => {
  if (typeof windFactor != 'number') {
    windFactor = Number(windFactor);

    if (isNaN(windFactor) == true) {
      windFactor = 0;
    };
  };

  if (typeof gateFactor != 'number') {
    gateFactor = Number(gateFactor);

    if (isNaN(gateFactor) == true) {
      gateFactor = 0;
    };
  };

  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  const totalPoints = distancePoints + stylePoints + windFactor + gateFactor;

  console.log(totalPoints);
  return totalPoints
};

module.exports = calculateTotalPoints;