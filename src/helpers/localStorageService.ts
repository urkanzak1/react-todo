import { ITodoItem } from "../types/ITodoItem";
import { TODO_LIST } from "../types/lsServiceTypes";

export const todoLocalStorage = {
    getTodoList: (): ITodoItem[] => {
        let todoList = [];
        if (localStorage.getItem(TODO_LIST)){
            todoList = JSON.parse(localStorage.getItem(TODO_LIST)!) ?? [];
        }
        return todoList;
    },
    setTodoList: (todoList: ITodoItem[]): void => {
        localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
    }
}