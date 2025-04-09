import axios from 'axios';
import React, { useState, useEffect } from "react"
import {  deleteTask } from "../services/api.js" 

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data); 
    } catch (error) {
      console.error("Error fetching tasks:", error)
    }
  };

  const handleDeleteTask = async (id) => {
    try {

      await deleteTask(id);
      fetchTasks(); 
    } catch (error) {
      console.error("Error deleting task:", error)
    }
  }

  return (
    <div>
      <h2>Task List</h2>
      <table className="gov-uk table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>
                <button
                  className="govuk-button govuk-button--warning"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList;

