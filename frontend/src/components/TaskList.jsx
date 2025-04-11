import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      <table className="gov-uk table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{new Date(task.due_date).toLocaleDateString()}</td>
              <td>
                <button
                  className="govuk-button govuk-button--warning"
                  onClick={() => deleteTask(task.id)} 
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
