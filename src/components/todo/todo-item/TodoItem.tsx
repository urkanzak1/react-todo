import classes from  "./TodoItem.module.scss";
import { removeTodoItemById } from "../../../redux/TodoSlice";
import { useTodoDispatch } from "../../../redux/TodoStore";
import { memo } from "react";
import cn from 'classnames';

export const TodoItem = memo(function TodoItem({id, name, text}: {id: number, name: string, text: string}){

    const todoDispatch = useTodoDispatch();

    const deleteItemHandler = () => {
        todoDispatch(removeTodoItemById(id));
    }

    return (
        // todo camelCase classes
        // todo classnames
        <div className={cn(classes.todoItem, classes.noSelect, { [classes.todoItem]: false })}>
            <div className={classes['btn-container']}>
                <label className="text-center ps-3">{name}</label>
                <button className={`${classes['btn-todo']} btn btn-danger rounded`} onClick={deleteItemHandler}>x</button>
            </div>
            <hr />
            <label className={`${classes.minHeight150px} ps-3`}>{text}</label>
        </div>
    )
})