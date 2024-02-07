import { GET_TODO_LIST, ADD_TODO_ITEM, REMOVE_TODO_ITEM_BY_ID } from "./todoTypes";

const handlers = {
    [GET_TODO_LIST]: (state) => {
        let todoList = [];
        if (localStorage.getItem('todo-list')){
            todoList = JSON.parse(localStorage.getItem('todo-list'));
        }
        return ({...state, todo: {...state.todo, todoList: todoList} });
    },
    [ADD_TODO_ITEM]: (state, action) => {
        let todoList = [...state.todo.todoList];
        if (action.todoItem){
            todoList.push(action.todoItem);
        }
        localStorage.setItem('todo-list', JSON.stringify(todoList));
        return ({...state, todo: {...state.todo, todoList: todoList} });
    },
    [REMOVE_TODO_ITEM_BY_ID]: (state, action) => {
        console.log(action);
        let todoList = [...state.todo.todoList];
        if (action.id){
            todoList = todoList.filter(item => item.id !== action.id);
        }
        localStorage.setItem('todo-list', JSON.stringify(todoList));
        return ({...state, todo: {...state.todo, todoList: todoList} });
    },
    DEFAULT: (state) => state
}

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers['DEFAULT'];
    return handler(state, action);
}