import React, { useState } from 'react';
import { createTask, updateTask } from '../services/api';

const TaskForm = ({ task, onTaskCreatedOrUpdated }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [status, setStatus] = useState(task ? task.status : 'pending');
  const [dueDate, setDueDate] = useState(task ? task.due_date : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      status,
      due_date: dueDate,
    };

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
        <label className="govuk-label">Title</label>
        <input className="govuk-input" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label className="govuk-label">Description</label>
        <textarea className="govuk-textarea" value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label className="govuk-label">Status</label>
        <select className="govuk-select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <label className="govuk-label">Due Date</label>
        <input className="govuk-input" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />

        <button className="govuk-button" type="submit">
          {task ? 'Update Task' : 'Create Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
