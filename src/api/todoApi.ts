import { sleep } from "../helpers/syncSleep";
import { ITodoItem } from "../types/ITodoItem"


export function $getTodoList(): Promise<ITodoItem[]>{
    return new Promise<ITodoItem[]>(resolve => {
        setTimeout(() => {
            let todoList = [];
            // todo вынести работу с localStorage в отдельный модуль
            if (localStorage.getItem('todo-list')){
                todoList = JSON.parse(localStorage.getItem('todo-list') ?? '{}') ?? [];
            }
            resolve(todoList);
        }, 3000);
    });
}

export function $syncGetTodoList(): ITodoItem[] {
    let todoList = [];
    sleep(3000);
    if (localStorage.getItem('todo-list')){
        todoList = JSON.parse(localStorage.getItem('todo-list') ?? '{}') ?? [];
    }
    return todoList;
}

export function $addTodoItem(todoList: ITodoItem[], item: ITodoItem): Promise<ITodoItem[]>{
    return new Promise<ITodoItem[]>(resolve => {
        const newList = [...todoList];
        setTimeout(() => {
            if (item){
                newList.push(item);
                localStorage.setItem('todo-list', JSON.stringify(newList));
            }
            resolve(newList);
        }, 1500);
    });
}