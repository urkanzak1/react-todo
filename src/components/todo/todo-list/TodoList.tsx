import * as React from "react";
import { useEffect } from 'react';
import { TodoItem } from '../todo-item/TodoItem';
import classes from "./TodoList.module.scss";
import { TodoCreate } from '../todo-create/TodoCreate';
import { useDispatch, useSelector } from "react-redux";
import { TodoDispatch, TodoState } from "../../../redux/TodoStore";
import { setTodoList, setLoading } from "../../../redux/TodoSlice";
import { $getTodoList } from "../../../api/todoApi";
import useEffectAsync from "../../../helpers/asyncUseEffect";

export const TodoList = () => {
 
    const todoList = useSelector((state: TodoState) => state.todoList);

    const dispatch = useDispatch<TodoDispatch>();

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