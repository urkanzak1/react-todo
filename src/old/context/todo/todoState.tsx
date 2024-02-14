import * as React from 'react';
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoContext } from "./todoContext";
import { ADD_TODO_ITEM, GET_TODO_LIST, REMOVE_TODO_ITEM_BY_ID } from './todoTypes';
import { ITodoItem } from "../../types/ITodoItem";

const initialState = {
    todo: {  
        todoList: []
    }
}

// todo drop
export const TodoState = ({children}: { children: any }) => {

    const [state, dispatch] = useReducer<(state: any, action: any) => any>(todoReducer, initialState);

    const {todoList}  = state.todo;

    const getTodoList = () => dispatch({type: GET_TODO_LIST});

    const addTodoItem = (todoItem: ITodoItem) => dispatch({type: ADD_TODO_ITEM, todoItem});

    const removeTodoItemById = (id: number) => dispatch({type: REMOVE_TODO_ITEM_BY_ID, id});

    return (
        <TodoContext.Provider value={{
            getTodoList, addTodoItem, removeTodoItemById, todoList
        }}>
            {children}
        </TodoContext.Provider>
    )

}