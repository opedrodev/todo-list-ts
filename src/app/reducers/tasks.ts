import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ITaskItem from '../../interfaces/TaskItem';
import ITasks from '../../interfaces/Tasks';

const INITIAL_STATE: ITasks = {
  open: [],
  archived: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    addTask(state, action: PayloadAction<ITaskItem>) {
      state.open.push(action.payload);
    },

    completeTask(state, action: PayloadAction<number>) {
      const index = state.open.findIndex((task) => task.id === action.payload);
      state.open[index].completed = true;
    },

    incompleteTask(state, action: PayloadAction<number>) {
      const index = state.open.findIndex((task) => task.id === action.payload);
      state.open[index].completed = false;
    },

    archiveTask(state, action: PayloadAction<number>) {
      const index = state.open.findIndex((task) => task.id === action.payload);
      const task = state.open.splice(index, 1);
      state.archived.push(task[0]);
    },
  }
});

export const { addTask, completeTask, incompleteTask, archiveTask } = taskSlice.actions;
export default taskSlice.reducer;
