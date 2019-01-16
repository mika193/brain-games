import getRandomNumber from '../utils';
import startGame from '../startGame';

const getGreatestCommonDivisor = (a, b) => {
  const smalestNumber = Math.min(a, b);

  const findDivisor = (divisor) => {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }

    return findDivisor(divisor - 1);
  };

  return findDivisor(smalestNumber);
};

const description = 'Find the greatest common divisor of given numbers';

const getRaundParams = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));

  return { question, correctAnswer };
};

export default () => {
  startGame(description, getRaundParams);
};
