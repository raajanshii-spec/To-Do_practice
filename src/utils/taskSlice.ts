import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name : "taskList",
    initialState : {
        tasks : []
    },
    reducers: {
        addTask : (state, action) => {
            console.log(action.payload);
            
            state.tasks.push(action.payload);

        },
        editTask : (state, action) => {
            const { id, text } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.text = text;
            }
        },
        deleteTask : (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },

        checkTask : (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        }

    }
});

export const { addTask, deleteTask, editTask, checkTask } = taskSlice.actions;

export default taskSlice.reducer;