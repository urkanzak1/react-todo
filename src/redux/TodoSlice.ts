import { createSlice } from '@reduxjs/toolkit';
import { TodoStateType } from '../types/todoStateType';
import * as todoReducers from './todoReducers';

const initialState: TodoStateType = {
    todoList: [],
    isLoading: false
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        getTodoList: todoReducers.getTodoListReducer,
        setTodoList: todoReducers.setTodoListReducer,
        addTodoItem: todoReducers.addTodoItemReducer,
        removeTodoItemById: todoReducers.removeTodoItemByIdReducer,
        setLoading: todoReducers.setLoadingReducer
    }
});

export const { addTodoItem, getTodoList, removeTodoItemById, setLoading, setTodoList } = TodoSlice.actions;

export default TodoSlice.reducer;