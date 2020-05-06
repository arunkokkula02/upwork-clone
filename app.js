const express = require('express');
const app = express();
const userRouter = require('./api/routes/User');
const freelancerRouter = require('./api/routes/FreelanceProfile');
const employerRouter = require('./api/routes/EmployerProfile');
const jobsRouter = require('./api/routes/Jobs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Handling CORS issues
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/user',userRouter);
app.use('/api/profile',freelancerRouter);
app.use('/api/profile',employerRouter);
app.use('/api',jobsRouter);


module.exports = app;





