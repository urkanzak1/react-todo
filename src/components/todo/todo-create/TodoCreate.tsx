import * as React from 'react';
import { useContext, useState } from "react";
import { TodoContext } from "../../../context/todo/todoContext";
import classes from  "./TodoCreate.module.scss";

export const TodoCreate = () => {

    const { addTodoItem } = useContext(TodoContext); 
    const [state, setState] = useState({
        name: '',
        text: ''
    });

    const onClickHandler = () => {
        if (state.name && state.text){
            addTodoItem({
                name: state.name,
                text: state.text,
                id: Math.random()
            });
            setState({
                name: '',
                text: ''
            });
        }
    }

    const onTodoCreateInputHandler = (event: any) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const AddButtonStyles: string = [classes.addButton, classes.rounded, "my-3"].join(' ');

    return (
        <div className={classes.TodoAdd}>
            <input name="name" className="form-control my-3" type="text" placeholder="input task name..." value={state.name || ''} onInput={onTodoCreateInputHandler} />
            <input name="text" className="form-control" type="text" placeholder="input task text..." value={state.text || ''} onInput={onTodoCreateInputHandler}  />
            <div className={AddButtonStyles} onClick={onClickHandler}>Add +</div>
        </div>
    )

}