const calculateStylePoints = (styleNotes) => {
  let stylePoints = [];

  styleNotes.forEach(arg => {
    if (typeof arg != 'number') {
      arg = Number(arg);

      !isNaN(arg) ? stylePoints.push(arg) : stylePoints.push(0);

    } else if (arg < 0 || arg > 20 || (arg % 0.5 != 0)) {
      stylePoints.push(0);
    } else {
      stylePoints.push(arg);
    }
  });

  stylePoints.sort((a,b) => a-b);
  stylePoints.shift();
  stylePoints.pop();

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const totalStylePoints = stylePoints.reduce(reducer);

  return totalStylePoints;
};

module.exports = calculateStylePoints;