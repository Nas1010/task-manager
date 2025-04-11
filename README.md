# Project Description

A task management application that allows caseworkers to create, manage, and delete tasks

# Features

CRUD operations for tasks (Create, Read, Update, Delete).

# API Endpoints

![API Endpoints](frontend/src/assets/api-endpoints.png)

# Tech Stack

Frontend:

- React: Used to build a dynamic and interactive user interface.

- Axios: Handles API requests between the frontend and backend.

- GovUK Frontend: Provides ready-to-use UI components for consistent and accessible design.

- Sass: A CSS preprocessor for writing cleaner and more maintainable styles.

Backend:

- Express: A minimal and flexible Node.js framework for building the backend API.

- Node.js: A JavaScript runtime for server-side development.

- PostgreSQL: A powerful relational database for managing and storing data.

# Testing

- CRUD Routes: Tested using Postman for manual testing of all API endpoints.

- Supertest: Used to simulate HTTP requests for automated testing of backend API routes.

- Unit Testing: Implemented unit tests using Vitest for both backend and frontend  to ensure all components and features are working as expected.

# Installation Instructions

## Clone the repository
git clone git@github.com:Nas1010/task-manager.git

## Navigate into the project folder
cd task-manager

## Install frontend dependencies
cd frontend
npm install

## Install backend dependencies
cd ../backend
npm install

## Set up environment variables
Add your environment variables in .env file

## Run both frontend and backend
npm run dev

## How to run tests:

- Run frontend tests (using Vitest)

cd frontend
npm run test

- Run backend tests (using Supertest and Vitest)

cd backend
npm run test

