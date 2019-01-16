
export const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min))
                    + min;

export const getGreatestCommonDivisor = (a, b) => {
  const smalestNumber = a > b ? b : a;

  const findDivisor = (divisor) => {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }

    return findDivisor(divisor - 1);
  };

  return findDivisor(smalestNumber);
};

export const getProgression = (progressionLength, progressionStep) => {
  const firstNumber = getRandomNumber();

  const iter = (counter, result) => {
    if (counter === progressionLength) {
      return result;
    }

    const newNumber = result[result.length - 1] + progressionStep;

    return iter(counter + 1, [...result, newNumber]);
  };

  return iter(1, [firstNumber]);
};
