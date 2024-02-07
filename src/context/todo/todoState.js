import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoContext } from "./todoContext";
import { ADD_TODO_ITEM, GET_TODO_LIST, REMOVE_TODO_ITEM_BY_ID } from './todoTypes';

const initialState = {
    todo: {  
        todoList: []
    }
}

export const TodoState = ({children}) => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const {todoList}  = state.todo;

    const getTodoList = () => dispatch({type: GET_TODO_LIST});

    const addTodoItem = (todoItem) => dispatch({type: ADD_TODO_ITEM, todoItem});

    const removeTodoItemById = (id) => dispatch({type: REMOVE_TODO_ITEM_BY_ID, id});

    return (
        <TodoContext.Provider value={{
            getTodoList, addTodoItem, removeTodoItemById, todoList
        }}>
            {children}
        </TodoContext.Provider>
    )

}