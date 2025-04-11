
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import tasks from './routes/tasks.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', tasks);

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;  
