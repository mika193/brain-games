import getRanomNumber from '../utils';
import startGame from '../startGame';

const operations = ['-', '+', '*'];
const getSumm = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const operationsMap = {
  '+': getSumm,
  '-': subtract,
  '*': multiply,
};

export default () => {
  const description = 'What is the result of the expression?';

  const getRaundParams = () => {
    const firstNumber = getRanomNumber();
    const secondNumber = getRanomNumber();
    const operation = operations[getRanomNumber(0, operations.length)];
    const question = `${firstNumber} ${operation} ${secondNumber}`;
    const correctAnswer = String(operationsMap[operation](firstNumber, secondNumber));

    return { question, correctAnswer };
  };

  startGame(description, getRaundParams);
};
