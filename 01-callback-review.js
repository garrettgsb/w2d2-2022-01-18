{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function maybeRun(fn) {
    if (Math.random() < 0.1) {
      fn();
    }
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(() => console.log('Hiii'));
    maybeRun(countTimesRan);
  }
}




{
  // Recursion vs. callbacks
  function countDown(currentCount, cb=()=>{}) {
    if (currentCount === 0) return;
    cb(currentCount);
    countDown(currentCount - 1, cb);
  }

  countDown(5);
  // countDown(5, (currentCount) => console.log(currentCount));
}
