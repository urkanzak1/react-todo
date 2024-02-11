import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./TodoSlice";

export const TodoStore = configureStore({
    reducer: todoReducer,
});

export type TodoState = ReturnType<typeof TodoStore.getState>
export type TodoDispatch = typeof TodoStore.dispatch;