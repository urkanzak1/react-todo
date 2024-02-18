import * as React from "react";
import { useEffect, useLayoutEffect } from 'react';
import { TodoItem } from '../todo-item/TodoItem';
import classes from "./TodoList.module.scss";
import { TodoCreate } from '../todo-create/TodoCreate';
import { useDispatch } from "react-redux";
import { TodoDispatch } from "../../../redux/TodoStore";
import { setTodoList, setLoading } from "../../../redux/TodoSlice";
import { $getTodoList } from "../../../api/todoApi";
import { todoListSelector, useTodoSelector } from "../../../redux/todoSelectors";

export const TodoList = () => {
 
    const todoList = useTodoSelector(todoListSelector);

    const dispatch = useDispatch<TodoDispatch>();

    //use effect with async data
    useEffect(() => {
            const fetchData = async () => {
                dispatch(setLoading({ loading: true }));
                const todoList = await $getTodoList();
                dispatch(setTodoList({ todoList }));
                dispatch(setLoading({ loading: false }));
            }
            fetchData()
        },
        // eslint-disable-next-line
    []);

    //use effect with sync data
    // useEffect(() => {
    //         dispatch(setLoading({ loading: true }));
    //         const todoList = $syncGetTodoList();
    //         dispatch(setTodoList({ todoList }));
    //         dispatch(setLoading({ loading: false }));
    //     },
    //     // eslint-disable-next-line
    // []);

    // use layout effect with sync data 
    // useLayoutEffect(() => {
    //         dispatch(setLoading({ loading: true }));
    //         const todoList = $syncGetTodoList();
    //         dispatch(setTodoList({ todoList }));
    //         dispatch(setLoading({ loading: false }));
    //     },
    //     // eslint-disable-next-line
    // []);

    return (
        <div className={classes.todoList}>
            {
                todoList?.length > 0 ? 
                todoList.map((item, index) => (
                    <TodoItem name={item.name} text={item.text} id={item.id} key={index} />
                )):
                <div className={`${classes['no-select']} my-4`}>Loading...</div>
            }
            <TodoCreate />
        </div>
    )
}