import express from 'express';
import { 
  createTask, 
  getTasks, 
  getTaskById, 
  updateTaskStatus, 
  deleteTask 
} from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);

router.get('/', getTasks);

router.get('/:id', getTaskById);

router.put('/:id/status', updateTaskStatus);

router.delete('/:id', deleteTask);

export default router;

//Sets up the routes for the tasks