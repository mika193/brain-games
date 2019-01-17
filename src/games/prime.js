import getRandomNumber from '../utils';
import startGame from '../startGame';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  const iter = (divisor) => {
    if (divisor === 1) {
      return true;
    }

    return number % divisor === 0 ? false : iter(divisor - 1);
  };

  return iter(number - 1);
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
