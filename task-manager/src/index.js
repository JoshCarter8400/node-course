const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is listening on ' + port);
});

// const Task = require('./models/Task');
// const User = require('./models/User');

// const main = async () => {
//   // const task = await Task.findById('604d3b4a6f000b519c44bca7');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById('604d3a8ded99cb31a4b57330');
//   await user.populate('tasks').execPopulate();

// };

// main();
