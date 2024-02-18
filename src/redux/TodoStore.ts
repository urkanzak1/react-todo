import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./TodoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const TodoStore = configureStore({
    reducer: todoReducer,
});

export type TodoState = ReturnType<typeof TodoStore.getState>
export type TodoDispatch = typeof TodoStore.dispatch;

export const useTodoSelector: TypedUseSelectorHook<TodoState> = useSelector;
export const useTodoDispatch = () => useDispatch<TodoDispatch>();