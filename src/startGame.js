import readlineSync from 'readline-sync';

const maxAttempts = 3;

export default (description, getRaundParams) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  const askQuestion = (attempt) => {
    if (attempt > maxAttempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { question, correctAnswer } = getRaundParams();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');

    askQuestion(attempt + 1);
  };

  askQuestion(1);
};
