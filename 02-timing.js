function sleep(seconds) {
  const stopTime = Date.now() + (seconds * 1000);
  while (Date.now() < stopTime) {
    continue;
  }
};

console.log('starting');
sleep(5);
console.log('a');
sleep(2);
console.log('b');
sleep(3);
console.log('c');
sleep(1);
console.log('done');
