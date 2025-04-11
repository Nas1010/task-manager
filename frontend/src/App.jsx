import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks } from './services/api';
import axios from 'axios';
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

  const handleTaskCreatedOrUpdated = (newTask) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask];
      console.log("Updated tasks:", updatedTasks); 
      return updatedTasks;
    });
    setShowForm(false);  
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="govuk-width-container">
      <h1 className="govuk-heading-xl">Task Manager</h1>
      <button className="govuk-button" onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Create Task'}
      </button>

      {showForm && <TaskForm onTaskCreatedOrUpdated={handleTaskCreatedOrUpdated} />}

      <TaskList tasks={tasks} deleteTask={deleteTask} /> 
    </div>
  );
};

export default App;
