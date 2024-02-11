import * as React from "react";
import { useEffect } from 'react';
import { TodoItem } from '../todo-item/TodoItem';
import classes from "./TodoList.module.scss";
import { TodoCreate } from '../todo-create/TodoCreate';
import { useDispatch, useSelector } from "react-redux";
import { TodoDispatch, TodoState, TodoStore } from "../../../redux/TodoStore";
import { getTodoList } from "../../../redux/TodoSlice";

export const TodoList = () => {
 
    const todoList = useSelector((state: TodoState) => state.todoList)
    const dispatch = useDispatch<TodoDispatch>();

    useEffect(() => {
            dispatch(getTodoList());
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