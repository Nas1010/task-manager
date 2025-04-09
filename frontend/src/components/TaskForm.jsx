import React, { useState } from 'react';
import { createTask, updateTask } from '../services/api';

const TaskForm = ({ task, onTaskCreatedOrUpdated }) => {
  const [name, setName] = useState(task ? task.name : ''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = { name };
    try {
      if (task) {
        await updateTask(task.id, newTask); 
      } else {
        await createTask(newTask); 
      }
      onTaskCreatedOrUpdated(); 
    } catch (error) {
      console.error('Error submitting task:', error);
    }
  };

  return (
    <div>
      <h2>{task ? 'Edit Task' : 'Create New Task'}</h2>
      <form onSubmit={handleSubmit} className="govuk-form-group">
        <label className="govuk-label" htmlFor="taskName">
          Task Name
        </label>
        <input
          className="govuk-input"
          type="text"
          id="taskName"
          name="taskName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button className="govuk-button" type="submit">
          {task ? 'Update Task' : 'Create Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

