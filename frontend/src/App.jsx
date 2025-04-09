
// import React, { useState } from 'react';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';
// import './App.scss'; 

// const App = () => {
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => setShowForm(!showForm);

//   return (
//     <div className="govuk-width-container">
//       <h1 className="govuk-heading-xl">Task Manager</h1>
//       <button className="govuk-button" onClick={toggleForm}>
//         {showForm ? 'Close Form' : 'Create Task'}
//       </button>

//       {showForm && <TaskForm onTaskCreatedOrUpdated={() => setShowForm(false)} />}

//       <TaskList />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { getTasks } from './services/api'; // Assume this fetches tasks
import './App.scss';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks(); // Get tasks from the API
      console.log('Fetched tasks:', response); // Log the entire response
      setTasks(response.data); // Assuming response.data is an array
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleForm = () => setShowForm(!showForm);

  const handleTaskCreatedOrUpdated = () => {
    fetchTasks(); // Re-fetch tasks after a new task is created or updated
    setShowForm(false); // Close the form
  };

  return (
    <div className="govuk-width-container">
      <h1 className="govuk-heading-xl">Task Manager</h1>
      <button className="govuk-button" onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Create Task'}
      </button>

      {showForm && <TaskForm onTaskCreatedOrUpdated={handleTaskCreatedOrUpdated} />}

      <TaskList tasks={tasks} /> {/* Pass tasks as props */}
    </div>
  );
};

export default App;
