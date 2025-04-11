const express = require('express');
const rateLimit = require('express-rate-limit');  

const app = express();


const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 5, 
  message: 'Too many requests. Please try again after an hour.',
  standardHeaders: true, 
  legacyHeaders: false,  
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Hello! You are within your rate limit.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
