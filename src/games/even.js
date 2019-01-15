import getRanomNumber from '../utils';

const isEven = num => num % 2 === 0;

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';

  const getRaundParams = () => {
    const question = getRanomNumber();
    return {
      question,
      correctAnswer: isEven(question) ? 'yes' : 'no',
    };
  };

  return { rules, getRaundParams };
};
