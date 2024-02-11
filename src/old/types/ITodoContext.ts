import { ITodoItem } from "./ITodoItem";

export interface ITodoContext {
    getTodoList: () => void,
    addTodoItem: (payload: ITodoItem) => void,
    removeTodoItemById: (id: number) => void,
    todoList: ITodoItem[]
}