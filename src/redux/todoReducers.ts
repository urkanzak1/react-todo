import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { todoLocalStorage } from "../helpers/localStorageService";
import { ITodoItem } from "../types/ITodoItem";
import { TodoStateType } from "../types/todoStateType";

const getTodoListReducer: CaseReducer<TodoStateType> = (state) => {
    state.todoList = todoLocalStorage.getTodoList();
};

const setTodoListReducer: CaseReducer<TodoStateType, PayloadAction<ITodoItem[]>> = (state, {payload: todoList}) => {
    if (todoList){
        state.todoList = todoList;
    }
};

const addTodoItemReducer: CaseReducer<TodoStateType, PayloadAction<ITodoItem>> = (state, {payload: todoItem}) => {
    if (todoItem){
        let todoList = [...state.todoList, todoItem];
        todoLocalStorage.setTodoList(todoList);
        state.todoList = todoList;
    }
};

const removeTodoItemByIdReducer: CaseReducer<TodoStateType, PayloadAction<number>> = (state, {payload: id}) => {
    let todoList = [...state.todoList];
    if (id){
        todoList = todoList.filter(item => item.id !== id);
    }
    todoLocalStorage.setTodoList(todoList);
    state.todoList =  todoList;
};

const setLoadingReducer: CaseReducer<TodoStateType, PayloadAction<boolean>> = (state, {payload: isLoading}) => {
    state.isLoading = isLoading;
};

export { getTodoListReducer, setTodoListReducer, addTodoItemReducer, removeTodoItemByIdReducer, setLoadingReducer };