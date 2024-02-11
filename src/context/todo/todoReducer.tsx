import { GET_TODO_LIST, ADD_TODO_ITEM, REMOVE_TODO_ITEM_BY_ID } from "./todoTypes";

const handlers = {
    [GET_TODO_LIST]: (state: any) => {
        let todoList = [];
        if (localStorage.getItem('todo-list')){
            todoList = JSON.parse(localStorage.getItem('todo-list') ?? '{}') ?? [];
        }
        return ({...state, todo: {...state.todo, todoList: todoList} });
    },
    [ADD_TODO_ITEM]: (state: any, action: any) => {
        let todoList = [...state.todo.todoList];
        if (action.todoItem){
            todoList.push(action.todoItem);
        }
        localStorage.setItem('todo-list', JSON.stringify(todoList));
        return ({...state, todo: {...state.todo, todoList: todoList} });
    },
    [REMOVE_TODO_ITEM_BY_ID]: (state: any, action: any) => {
        let todoList = [...state.todo.todoList];
        if (action.id){
            todoList = todoList.filter(item => item.id !== action.id);
        }
        localStorage.setItem('todo-list', JSON.stringify(todoList));
        return ({...state, todo: {...state.todo, todoList: todoList} });
    },
    DEFAULT: (state: any) => state
}

export const todoReducer = (state: any, action: any) => {
    switch(action.type){
        case GET_TODO_LIST: {
            return handlers[GET_TODO_LIST](state);
        }
        case ADD_TODO_ITEM: {
            return handlers[ADD_TODO_ITEM](state, action);
        }
        case REMOVE_TODO_ITEM_BY_ID: {
            return handlers[REMOVE_TODO_ITEM_BY_ID](state, action);
        }
        default: {
            return handlers['DEFAULT'](state);
        }
    }
}