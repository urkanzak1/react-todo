import * as React from 'react';
import { useContext, useState } from "react";
import { TodoContext } from "../../../context/todo/todoContext";
import "./TodoCreate.scss";

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

    return (
        <div className="TodoAdd">
            <input name="name" className="form-control my-3" type="text" placeholder="input task name..." value={state.name || ''} onInput={onTodoCreateInputHandler} />
            <input name="text" className="form-control" type="text" placeholder="input task text..." value={state.text || ''} onInput={onTodoCreateInputHandler}  />
            <div className="add-button rounded my-3" onClick={onClickHandler}>Add +</div>
        </div>
    )

}