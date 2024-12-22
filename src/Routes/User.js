const express = require('express');
const userRouter = express.Router();
const signUpController = require('../Controller/SignUpController');
const signInController = require('../Controller/SignInController');


userRouter.get('/', (req, res) => {
  res.send('Hello from User Routes!');
});

userRouter.post('/sign-up', signUpController.SignUp);
userRouter.post('/sign-in', signInController.signIn);
userRouter.post('/generate-access-token', signInController.generateAccessToken);

module.exports = userRouter;

