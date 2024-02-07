import React, { useContext, useState } from "react";
import { TodoContext } from "../../../context/todo/todoContext";
import "./TodoCreate.scss";

export const TodoCreate = () => {

    const { addTodoItem } = useContext(TodoContext); 
    const [state, setState] = useState({
        name: '',
        text: ''
    });

    const onClickHandler = () => {
        console.log(state);
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

    const onTaskNameInputHandler = (event) => {
        setState({
            ...state,
            name: event.target.value
        });
    }
    
    const onTaskTextInputHanlder = (event) => {
        setState({
            ...state,
            text: event.target.value
        })
    }

    return (
        <div className="TodoAdd">
            <input className="form-control my-3" type="text" placeholder="input task name..." value={state.name || ''} onInput={onTaskNameInputHandler} />
            <input className="form-control" type="text" placeholder="input task text..." value={state.text || ''} onInput={onTaskTextInputHanlder}  />
            <div className="add-button rounded my-3" onClick={onClickHandler}>Add +</div>
        </div>
    )

}