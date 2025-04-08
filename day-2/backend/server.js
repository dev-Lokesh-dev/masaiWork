const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/', formRoutes);

mongoose.connect('mongodb://localhost:27017/dynamicForms', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
