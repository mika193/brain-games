import getRandomNumber from '../utils';
import startGame from '../startGame';


const isEven = num => num % 2 === 0;

export default () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  const getRaundParams = () => {
    const question = getRandomNumber();
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return { question, correctAnswer };
  };

  startGame(description, getRaundParams);
};
