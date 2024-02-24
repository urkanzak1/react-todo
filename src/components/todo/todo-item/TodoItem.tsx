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
        <div className={cn(classes.todoItem, classes.noSelect)}>
            <div className={classes.btnContainer}>
                <label className="text-center ps-3">{name}</label>
                <button className={cn(classes.btnTodo, 'btn', 'btn-danger', 'rounded')} onClick={deleteItemHandler}>x</button>
            </div>
            <hr />
            <label className={cn(classes.minHeight150Px, {'ps-3': true})}>{text}</label>
        </div>
    )
})