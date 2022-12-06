import ITasks from '../interfaces/Tasks';

/**
 * Get tasks from local storage and return them if they exist. If they don't exist, return an empty object.
 * @returns {ITasks} - The tasks from local storage
 */
export const getTasksFromLocalStorage = (): ITasks => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : { open: [], archived: [] };
};

/**
 * Save tasks to local storage.
 * @param tasks - The tasks to save to local storage
 */
export const saveTasksToLocalStorage = (tasks: ITasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
