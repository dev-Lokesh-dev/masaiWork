import express from 'express';
import taskRoutes from './routes/taskRoutes.js';
import { rateLimiter } from './middlewares/rateLimiter.js';

const app = express();

app.use(express.json());
app.use('/api/tasks', rateLimiter, taskRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
