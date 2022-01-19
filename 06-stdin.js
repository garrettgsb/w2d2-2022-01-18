const messages = [];

const questions = [
  'First name?',
  'Last name?',
  'Favorite color?',
];

process.stdin.on('data', (message) => {
  //question here
  // console.log('message:', String(message));
  messages.push(String(message).trim());
  console.log('messages:', messages);
  console.log('---\n\n');
  const nextQuestion = questions[messages.length]
  if (nextQuestion) {
    console.log(nextQuestion);
  } else {
    doSomethingElse();
  }
});

function doSomethingElse() { console.log('All done!') }

console.log(questions[0]);
