import * as React from "react";
import { useContext, useEffect } from 'react';
import { TodoContext } from '../../../context/todo/todoContext';
import { TodoItem } from '../todo-item/TodoItem';
import classes from "./TodoList.module.scss";
import { TodoCreate } from '../todo-create/TodoCreate';

export const TodoList = () => {
 
    const {todoList, getTodoList} = useContext(TodoContext);

    useEffect(() => {
            getTodoList();
        },
        // eslint-disable-next-line
    []);

    return (
        <div className={classes.todoList}>
            {
                todoList?.length > 0 ? 
                todoList.map((item, index) => (
                    <TodoItem name={item.name} text={item.text} id={item.id} key={index} />
                )):
                <div className={`${classes['no-select']} my-4`}>No Data</div>
            }
            <TodoCreate />
        </div>
    )
}