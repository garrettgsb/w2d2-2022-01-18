// We want to say "do X in Y milliseconds."
// So it's not like the whole program has to wait for 2 seconds, then do a thing, then wait, then do a thing...
// It's like you say "Hey, do your thing, but when 2 seconds have passed, run this, k?"

// console.log('starting...');
// setTimeout(() => console.log('a'), 2000);
// setTimeout(() => console.log('b'), 3000);
// setTimeout(() => console.log('c'), 1000);
// setTimeout(() => console.log('d'), 4000);
// console.log('done!');

const letters = 'abcd'.split('');

for (let i = 0; i < letters.length; i++) {
  setTimeout(() => console.log(letters[i]), Math.random() * 1000);
}

const fnA = () => {
  console.log('a');
  setTimeout(fnB, 2000);
};

const fnB = () => {
  console.log('b');
  setTimeout(fnC, 3000);
  someArr.push(val);
};

const fnC = () => {
  console.log('c');
};

setTimeout(fnA, 1000);
