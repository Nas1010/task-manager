import express from 'express';
import dotenv from 'dotenv';
import tasks from './routes/tasks.js'

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/tasks', tasks)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});