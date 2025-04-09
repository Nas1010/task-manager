
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.scss'; 

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <div className="govuk-width-container">
      <h1 className="govuk-heading-xl">Task Manager</h1>
      <button className="govuk-button" onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Create Task'}
      </button>

      {showForm && <TaskForm onTaskCreatedOrUpdated={() => setShowForm(false)} />}

      <TaskList />
    </div>
  );
};

export default App;
