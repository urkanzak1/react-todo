import { ITodoItem } from "../types/ITodoItem"

export function $getTodoList(): Promise<ITodoItem[]>{
    return new Promise<ITodoItem[]>(resolve => {
        setTimeout(() => {
            let todoList = [];
            if (localStorage.getItem('todo-list')){
                todoList = JSON.parse(localStorage.getItem('todo-list') ?? '{}') ?? [];
            }
            resolve(todoList);
        }, 3000);
    });
}

export function $addTodoItem(todoList: ITodoItem[], item: ITodoItem): Promise<ITodoItem[]>{
    return new Promise<ITodoItem[]>(resolve => {
        setTimeout(() => {
            if (item){
                todoList.push(item);
                localStorage.setItem('todo-list', JSON.stringify(todoList));
            }
            resolve(todoList);
        }, 1500);
    });
}