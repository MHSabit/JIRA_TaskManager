const express = require('express');
const app = express();
const dotenv = require('dotenv');
// require Route
const userRouter = require('./Routes/User');
const ProjectRouter = require('./Routes/Project');
const ticketRouter = require('./Routes/Ticket');


const connectDB = require('./configDB');

connectDB();

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/user', userRouter);
app.use('/projects', ProjectRouter);
app.use('/tickets', ticketRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});
