import readlineSync from 'readline-sync';
import greetUser from '.';

const randomLimits = {
  min: 1,
  max: 100,
};

const maxAttempts = 3;

const getRanomNumber = () => Math.floor(Math.random() * (randomLimits.max - randomLimits.min))
                            + randomLimits.min;

const isEven = num => num % 2 === 0;

export default () => {
  console.log(`Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no".
  `);

  const userName = greetUser();

  console.log(' ');

  const askQuestion = (attempt) => {
    const randomNumber = getRanomNumber();

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'
Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');

    if (attempt === maxAttempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    askQuestion(attempt + 1);
  };

  askQuestion(1);
};
