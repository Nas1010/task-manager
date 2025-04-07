import express from 'express';
import { 
  createTask, 
  getTasks, 
  getTaskById, 
  updateTaskStatus, 
  deleteTask 
} from '../controllers/taskController.js'

import validateTask from '../middleware/validateTask.js';

const router = express.Router();

router.post('/', validateTask, createTask);

router.get('/', getTasks);

router.get('/:id', getTaskById);

router.put('/:id/status', validateTask, updateTaskStatus);

router.delete('/:id', deleteTask);

export default router;

//Sets up the routes for the tasks