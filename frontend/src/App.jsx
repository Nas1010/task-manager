
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks } from './services/api'; 
import './App.scss';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks(); 
      console.log('Fetched tasks:', response); 
      setTasks(response.data); 
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleForm = () => setShowForm(!showForm);

  const handleTaskCreatedOrUpdated = () => {
    fetchTasks(); 
    setShowForm(false); 
  };

  return (
    <div className="govuk-width-container">
      <h1 className="govuk-heading-xl">Task Manager</h1>
      <button className="govuk-button" onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Create Task'}
      </button>

      {showForm && <TaskForm onTaskCreatedOrUpdated={handleTaskCreatedOrUpdated} />}

      <TaskList tasks={tasks} /> 
    </div>
  );
};

export default App;
