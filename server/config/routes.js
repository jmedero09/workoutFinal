const rootRouter = require('../api/root/root.router');
const workoutRouter = require('../api/workout/workout.router');
const userRouter = require('../api/user/user.router');
const authRouter = require('../api/auth/auth.router');
const path = require('path');
const express_jwt = require('express-jwt');

module.exports = app => {
  app.use('/api/', rootRouter);
  app.use('/api/users', userRouter);
  app.use('/auth', authRouter);
  app.use('/api/workouts', express_jwt({
    secret: '12345'
  }), workoutRouter);
  app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
  });
};