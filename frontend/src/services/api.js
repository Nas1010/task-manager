import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';


export const getTasks = () => {
    return axios.get(API_URL)
};

export const getTaskById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createTask = (task) => {
    return axios.post(API_URL, task);
}

export const updateTask = (id, updatedTask) => {
    return axios.put(`${API_URL}/${id}`, updatedTask);
}

export const deleteTask = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};