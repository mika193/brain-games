import getRandomNumber from '../utils';
import startGame from '../startGame';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }

  if (number <= 1 || number % 2 === 0) {
    return false;
  }

  const checkParams = {
    firstDivisor: 3,
    changeDivisorStep: 2,
  };

  const iter = (divisor) => {
    if (divisor * divisor > number) {
      return true;
    }

    return number % divisor === 0 ? false : iter(divisor + checkParams.changeDivisorStep);
  };

  return iter(checkParams.firstDivisor);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRaundParams = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};


export default () => {
  startGame(description, getRaundParams);
};
