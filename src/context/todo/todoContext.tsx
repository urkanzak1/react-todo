import { createContext } from "react";
import { ITodoItem } from "../../components/types/ITodoItem";
import { ITodoContext } from "../../components/types/ITodoContext";
import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    getTodoList: () => [], 
    addTodoItem: (payload : ITodoItem) => {}, 
    removeTodoItemById: (id: number) => {}, 
    todoList: []
}

export const TodoContext = createContext<ITodoContext>(initialState);