import * as React from "react";
import { useContext } from "react";
import "./TodoItem.scss";
import { TodoContext } from "../../../context/todo/todoContext";

export const TodoItem = ({id, name, text}: {id: number, name: string, text: string}) => {

    const { removeTodoItemById } = useContext(TodoContext);

    const deleteItemHandler = () => {
        removeTodoItemById(id)
    }

    return (
        <div className="todo-item no-select">
            <div className="btn-container">
                <label className="text-center ps-3">{name}</label>
                <button className="btn btn-danger rounded btn-todo" onClick={deleteItemHandler}>x</button>
            </div>
            <hr />
            <label className="min-height-150px ps-3">{text}</label>
        </div>
    )
}