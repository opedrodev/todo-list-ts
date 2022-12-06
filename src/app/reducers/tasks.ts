import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ITaskItem from '../../interfaces/TaskItem';
import ITasks from '../../interfaces/Tasks';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../../services/localStorage';

const INITIAL_STATE: ITasks = getTasksFromLocalStorage();

const taskSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    addTask(state, action: PayloadAction<ITaskItem>) {
      state.open.push(action.payload);
      saveTasksToLocalStorage(state);
    },

    completeTask(state, action: PayloadAction<number>) {
      const index = state.open.findIndex((task) => task.id === action.payload);
      state.open[index].completed = true;
      saveTasksToLocalStorage(state);
    },

    incompleteTask(state, action: PayloadAction<number>) {
      const index = state.open.findIndex((task) => task.id === action.payload);
      state.open[index].completed = false;
      saveTasksToLocalStorage(state);
    },

    archiveTask(state, action: PayloadAction<number>) {
      const index = state.open.findIndex((task) => task.id === action.payload);
      const task = state.open.splice(index, 1);
      state.archived.unshift(task[0]);
      saveTasksToLocalStorage(state);
    },

    removeTask(state, action: PayloadAction<number>) {
      const index = state.archived.findIndex((task) => task.id === action.payload);
      state.archived.splice(index, 1);
      saveTasksToLocalStorage(state);
    },
  }
});

export const { addTask, completeTask, incompleteTask, archiveTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
