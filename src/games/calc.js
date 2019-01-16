import getRandomNumber from '../utils';
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
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const operation = operations[getRandomNumber(0, operations.length)];
    const question = `${firstNumber} ${operation} ${secondNumber}`;
    const correctAnswer = String(operationsMap[operation](firstNumber, secondNumber));

    return { question, correctAnswer };
  };

  startGame(description, getRaundParams);
};
