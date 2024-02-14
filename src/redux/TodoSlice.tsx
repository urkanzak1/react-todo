import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { ITodoItem } from '../types/ITodoItem';

const initialState: { todoList: ITodoItem[], isLoading: boolean } = {
    todoList: [],
    isLoading: false
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        // todo types
        // todo tsx
        // todo localStorage
        getTodoList: state => {
            let todoList = [];
            if (localStorage.getItem('todo-list')){
                todoList = JSON.parse(localStorage.getItem('todo-list') ?? '{}') ?? [];
            }
            state.todoList = todoList;
        },
        setTodoList: (state, action) => {
            if (action.payload.todoList){
                state.todoList = action.payload.todoList;
            }
        },
        // todo деструктуризация
        addTodoItem: (state, action) => {
            let todoList = [...state.todoList];
            if (action.payload){
                todoList.push(action.payload);
            }
            localStorage.setItem('todo-list', JSON.stringify(todoList));
            state.todoList = todoList;
        },
        removeTodoItemById: (state, action) => {
            let todoList = [...state.todoList];
            if (action.payload){
                todoList = todoList.filter(item => item.id !== action.payload);
            }
            localStorage.setItem('todo-list', JSON.stringify(todoList));
            state.todoList =  todoList;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload.loading;
        }
    }
});

export const { addTodoItem, getTodoList, removeTodoItemById, setLoading, setTodoList } = TodoSlice.actions;

export default TodoSlice.reducer;