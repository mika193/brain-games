
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
