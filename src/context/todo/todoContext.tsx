import { createContext } from "react";
import { ITodoItem } from "../../components/types/ITodoItem";
import { ITodoContext } from "../../components/types/ITodoContext";

const initialState = {
    getTodoList: () => [], 
    addTodoItem: (payload : ITodoItem) => {}, 
    removeTodoItemById: (id: number) => {}, 
    todoList: []
}

export const TodoContext = createContext<ITodoContext>(initialState);