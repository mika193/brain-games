import getRandomNumber from '../utils';
import startGame from '../startGame';

const progressionLength = 10;
const progressionStepParams = {
  min: 1,
  max: 10,
};

const getProgression = (progressionStep, firstNumber) => {
  const iter = (counter, result) => {
    if (counter === progressionLength) {
      return result;
    }

    const newNumber = result[result.length - 1] + progressionStep;

    return iter(counter + 1, [...result, newNumber]);
  };

  return iter(1, [firstNumber]);
};

const description = 'What number is missing in the progression?';

const getRaundParams = () => {
  const progressionStep = getRandomNumber(progressionStepParams.min, progressionStepParams.max);
  const progrssionFirstNumber = getRandomNumber();
  const progression = getProgression(progressionStep, progrssionFirstNumber);
  const hiddenNumberPosition = getRandomNumber(0, progressionLength);
  const question = progression.reduce((result, number, i) => {
    const currentElement = i === hiddenNumberPosition ? '..' : number;
    return `${result} ${currentElement}`;
  }, '');
  const correctAnswer = String(progression[hiddenNumberPosition]);

  return { question, correctAnswer };
};

export default () => {
  startGame(description, getRaundParams);
};
