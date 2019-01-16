import { getRandomNumber, getProgression } from '../utils';
import startGame from '../startGame';

const progressionLength = 10;
const progressionStepParams = {
  min: 1,
  max: 10,
};

export default () => {
  const description = 'What number is missing in the progression?';

  const getRaundParams = () => {
    const progressionStep = getRandomNumber(progressionStepParams.min, progressionStepParams.max);
    const progression = getProgression(progressionLength, progressionStep);
    const hiddenNumberPosition = getRandomNumber(0, progressionLength);
    const question = progression.reduce((result, number, i) => {
      const currentElement = i === hiddenNumberPosition ? '..' : number;
      return `${result} ${currentElement}`;
    }, '');
    const correctAnswer = String(progression[hiddenNumberPosition]);

    return { question, correctAnswer };
  };

  startGame(description, getRaundParams);
};
