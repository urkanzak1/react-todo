import { createSlice } from '@reduxjs/toolkit';
import { ITodoItem } from '../types/ITodoItem';
import { lsGetTodoList, lsSetTodoList } from '../helpers/localStorageService';

const initialState: { todoList: ITodoItem[], isLoading: boolean } = {
    todoList: [],
    isLoading: false
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        getTodoList: state => {
            state.todoList = lsGetTodoList();
        },
        setTodoList: (state, action) => {
            if (action.payload.todoList){
                state.todoList = action.payload.todoList;
            }
        },
        addTodoItem: (state, action) => {
            if (action.payload){
                let todoList = [...state.todoList, action.payload];
                lsSetTodoList(todoList);
                state.todoList = todoList;
            }
        },
        removeTodoItemById: (state, action) => {
            let todoList = [...state.todoList];
            if (action.payload){
                todoList = todoList.filter(item => item.id !== action.payload);
            }
            lsSetTodoList(todoList);
            state.todoList =  todoList;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload.loading;
        }
    }
});

export const { addTodoItem, getTodoList, removeTodoItemById, setLoading, setTodoList } = TodoSlice.actions;

export default TodoSlice.reducer;