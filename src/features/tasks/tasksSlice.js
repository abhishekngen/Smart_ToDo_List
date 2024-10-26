import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { taskStatus } from './taskStatus';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('http://localhost:4000/tasks');
  console.log(response);
  const json = await response.json();
  return json;
});

const initialState = {
  tasks: [],
  isLoading: false,
  hasError: false
};
// {
//   id: Date.now(), // Will generate using API DB call
//   title: 'A Task!',
//   description: '',
//   category: 'General',
//   deadline: new Date().toLocaleDateString('en-GB'),
//   status: taskStatus.ToDo
// }
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks.splice(state.tasks.findIndex(task => task.id = action.payload), 1);
        },
        updateTask: (state, action) => {
          state.tasks.find(task => task.id === action.payload.task.id).status = action.payload.newStatus;
        }
    },
    extraReducers: {
      [fetchTasks.pending]: (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      },
      [fetchTasks.fulfilled]: (state, action) => {
        console.log(action.payload);
        state.tasks = action.payload;
        state.isLoading = false;
        state.hasError = false;
      },
      [fetchTasks.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      }
    }
});

export const {addTask, removeTask, updateTask} = tasksSlice.actions;

export const selectTasks = state => state.tasks.tasks;

export const selectToDoTasks = state => state.tasks.tasks.filter(task => task.status === taskStatus.ToDo);

export const selectDoingTasks = state => state.tasks.tasks.filter(task => task.status === taskStatus.Doing);

export const selectDoneTasks = state => state.tasks.tasks.filter(task => task.status === taskStatus.Done);

export default tasksSlice.reducer;