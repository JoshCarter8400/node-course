const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('No math for you');
      }
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(23, 40);
  const sum2 = await add(sum, 1100);
  const sum3 = await add(sum2, 10);
  return sum3;
};

doWork()
  .then((result) => {
    console.log(('result', result));
  })
  .catch((e) => {
    console.log('e', e);
  });
