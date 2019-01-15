import readlineSync from 'readline-sync';
import greetUser from './greetUser';

const maxAttempts = 3;

export default (getRaundParams) => {
  const userName = greetUser();

  console.log(' ');

  const askQuestion = (attempt) => {
    const raundParams = getRaundParams();
    console.log(`Question: ${raundParams.question}`);
    const answer = readlineSync.question('Your answer: ');
    const { correctAnswer } = raundParams;

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
