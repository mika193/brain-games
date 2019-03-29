import getRandomNumber from '../utils';
import startGame from '../startGame';

const isPrime = (number) => {
  const firstDivisor = 3;
  const changeDivisorStep = 2;

  const iter = divisor => divisor * divisor > number
    || (!number % divisor === 0 && iter(divisor + changeDivisorStep));

  return number <= 2 || number % 2 === 0 ? number === 2 : iter(firstDivisor);
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
