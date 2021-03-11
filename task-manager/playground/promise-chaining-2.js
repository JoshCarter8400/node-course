require('../src/db/mongoose');
const Task = require('../src/models/Task');

// Task.findByIdAndDelete('604a6297a2fe4840dca40f4c', { completed: false })
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id, {
    completed,
  });
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount('604a6ab9731287103088596b', false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
