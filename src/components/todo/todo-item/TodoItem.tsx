import * as React from "react";
import classes from  "./TodoItem.module.scss";
import { removeTodoItemById } from "../../../redux/TodoSlice";
import { useDispatch } from "react-redux";
import { TodoDispatch } from "../../../redux/TodoStore";

export const TodoItem = React.memo(function TodoItem({id, name, text}: {id: number, name: string, text: string}){

    const dispatch = useDispatch<TodoDispatch>();

    const deleteItemHandler = () => {
        dispatch(removeTodoItemById(id));
    }

    return (
        <div className={`${classes['todo-item']} ${classes['no-select']}`}>
            <div className={classes['btn-container']}>
                <label className="text-center ps-3">{name}</label>
                <button className={`${classes['btn-todo']} btn btn-danger rounded`} onClick={deleteItemHandler}>x</button>
            </div>
            <hr />
            <label className={`${classes['min-height-150px']} ps-3`}>{text}</label>
        </div>
    )
})