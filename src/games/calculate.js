import startGame from '../startGame';
import getRanomNumber from '../getRandomNumber';

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
  console.log(`What is the result of the expression?
  `);

  const getGameParams = () => {
    const firstNumber = getRanomNumber();
    const secondNumber = getRanomNumber();
    const operation = operations[getRanomNumber(0, operations.length)];

    return {
      question: `${firstNumber} ${operation} ${secondNumber}`,
      correctAnswer: String(operationsMap[operation](firstNumber, secondNumber)),
    };
  };

  startGame(getGameParams);
};
