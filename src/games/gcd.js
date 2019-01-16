import { getRandomNumber, getGreatestCommonDivisor } from '../utils';
import startGame from '../startGame';

export default () => {
  const description = 'Find the greatest common divisor of given numbers';

  const getRaundParams = () => {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));

    return { question, correctAnswer };
  };

  startGame(description, getRaundParams);
};
