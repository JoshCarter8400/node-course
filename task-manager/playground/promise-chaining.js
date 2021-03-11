require('../src/db/mongoose');
const User = require('../src/models/User');

// User.findByIdAndUpdate('604a74db6dcabf50e01831ea', { age: 36 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 36 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const upDateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {
    age,
  });
  const count = await User.countDocuments({ age });
  return count;
};

upDateAgeAndCount('604a74db6dcabf50e01831ea', 28)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
