import { TodoState } from "./TodoStore";

export const todoStateSelector = (state: TodoState) => state;

export const todoListSelector = (state: TodoState) => state.todoList;

export const todoIsLoadingSelector = (state: TodoState) => state.isLoading;
