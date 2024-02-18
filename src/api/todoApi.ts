import { todoLocalStorage } from "../helpers/localStorageService";
import { sleep } from "../helpers/syncSleep";
import { ITodoItem } from "../types/ITodoItem"

export function $getTodoList(): Promise<ITodoItem[]>{
    return new Promise<ITodoItem[]>(resolve => {
        setTimeout(() => {
            let todoList = todoLocalStorage.getTodoList();
            resolve(todoList);
        }, 3000);
    });
}

export function $syncGetTodoList(): ITodoItem[] {
    let todoList = todoLocalStorage.getTodoList();
    sleep(3000);
    return todoList;
}

export function $addTodoItem(todoList: ITodoItem[], item: ITodoItem): Promise<ITodoItem[]>{
    return new Promise<ITodoItem[]>(resolve => {
        const newList = [...todoList];
        setTimeout(() => {
            if (item){
                newList.push(item);
                todoLocalStorage.setTodoList(newList);
            }
            resolve(newList);
        }, 1500);
    });
}