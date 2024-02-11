import { createSlice } from '@reduxjs/toolkit';
import { ITodoItem } from '../components/types/ITodoItem';

const initialState: { todoList: ITodoItem[] } = {
    todoList: []
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        getTodoList: state => {
            let todoList = [];
            if (localStorage.getItem('todo-list')){
                todoList = JSON.parse(localStorage.getItem('todo-list') ?? '{}') ?? [];
            }
            state.todoList = todoList;
        },
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
        }
    }
});

export const { addTodoItem, getTodoList, removeTodoItemById } = TodoSlice.actions;

export default TodoSlice.reducer;