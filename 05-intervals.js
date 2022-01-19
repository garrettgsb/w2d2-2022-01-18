// The interface for setInterval is the same as setTimeout (including the return value)
{
  let count = 0;
  const interval = setInterval(() => {
    console.log('tick')
    count++;
    if (count >= 5) {
      clearInterval(interval);
    }
  }, 1000);
}
