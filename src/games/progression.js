import getRandomNumber from '../utils';
import startGame from '../startGame';

const progressionParams = {
  length: 10,
  step: {
    min: 1,
    max: 10,
  },
};

const getProgression = (length, step, firstNumber) => {
  const iter = (counter, result) => {
    if (counter === length) {
      return result;
    }

    const newNumber = result[result.length - 1] + step;

    return iter(counter + 1, [...result, newNumber]);
  };

  return iter(1, [firstNumber]);
};

const description = 'What number is missing in the progression?';

const getRaundParams = () => {
  const progressionStep = getRandomNumber(progressionParams.step.min, progressionParams.step.max);
  const progrssionFirstNumber = getRandomNumber();
  const progression = getProgression(progressionParams.length, progressionStep,
    progrssionFirstNumber);
  const hiddenNumberPosition = getRandomNumber(0, progressionParams.length);
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
