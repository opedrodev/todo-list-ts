import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import ITaskItem from '../../interfaces/TaskItem';

interface Tasks {
  data: ITaskItem[],
}

const INITIAL_STATE: Tasks = {
  data: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE,
  reducers: {
    addTask(state, action: PayloadAction<ITaskItem>) {
      state.data.push(action.payload);
    }
  }
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
