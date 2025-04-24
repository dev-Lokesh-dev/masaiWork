const express = require('express');
const app = express();
const expensesRoutes = require('./routes/expenses');

app.use(express.json());
app.use('/api/expenses', expensesRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));