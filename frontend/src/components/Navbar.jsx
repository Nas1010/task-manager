import React from 'react';
import '../App.scss'; // Import SCSS for styling

const Navbar = ({ showForm, toggleForm }) => {
  return (
    <nav className="govuk-navbar">
      <div className="govuk-navbar__item govuk-navbar__item--logo">
        <a href="/" className="govuk-navbar__link">Task Manager</a>
      </div>
      <div className="govuk-navbar__menu">
        <ul className="govuk-navbar__list">
          <li className="govuk-navbar__list-item">
            <a href="/" className="govuk-navbar__link">Home</a>
          </li>
          <li className="govuk-navbar__list-item">
            <a href="#task-list" className="govuk-navbar__link">Task List</a>
          </li>
          <li className="govuk-navbar__list-item">
            <a 
              href="#create-task" 
              className="govuk-navbar__link" 
              onClick={toggleForm}
            >
              {showForm ? 'Close Form' : 'Create Task'}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
