import getRanomNumber from '../getRandomNumber';
import startGame from '../startGame';

const isEven = num => num % 2 === 0;

export default () => {
  console.log(`Answer "yes" if number even otherwise answer "no".
  `);

  const getGameParams = () => {
    const randomNumber = getRanomNumber();
    return {
      question: randomNumber,
      correctAnswer: isEven(randomNumber) ? 'yes' : 'no',
    };
  };

  startGame(getGameParams);
};
