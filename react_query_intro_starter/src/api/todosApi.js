import axios from 'axios';

const todosApi = axios.create({
  baseURL: "http://localhost:3500"
});

// Get
export const getTodos = async () => {
  const response = await todosApi.get('/todos');
  return response.data;
};

// Post
export const addTodo = async (todo) => {
  return await todosApi.post('/todos', todo);
};

// Patch
export const updateTodo = async (todo) => {
  return await todosApi.patch(`/todos/${todo.id}`, todo);
};

// Delete
export const deleteTodo = async ({ id }) => {
  return await todosApi.delete(`/todos/${id}`, id);
};

export default todosApi;
