import React, { useContext } from "react";
import "./TodoItem.scss";
import { TodoContext } from "../../../context/todo/todoContext";

export const TodoItem = (props) => {

    const { removeTodoItemById } = useContext(TodoContext);

    const deleteItemHandler = () => {
        removeTodoItemById(props.id)
    }

    return (
        <div className="todo-item no-select">
            <div className="btn-container">
                <label className="text-center ps-3">{props.name}</label>
                <button className="btn btn-danger rounded btn-todo" onClick={deleteItemHandler}>x</button>
            </div>
            <hr />
            <label className="min-height-300px ps-3">{props.text}</label>
        </div>
    )
}