import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../../context/todo/todoContext';
import { TodoItem } from '../todo-item/TodoItem';
import "./TodoList.scss";
import { TodoCreate } from '../todo-create/TodoCreate';

export const TodoList = () => {
 
    const {todoList, getTodoList} = useContext(TodoContext);

    useEffect(() => {
            getTodoList();
        },
        // eslint-disable-next-line
    []);

    console.log(todoList);

    return (
        <div className="todoList">
            {
                todoList?.length > 0 ? 
                todoList.map((item, index) => (
                    <TodoItem name={item.name} text={item.text} id={item.id} key={index} />
                )):
                <div className='no-select my-4'>No Data</div>
            }
            <TodoCreate />
        </div>
    )
}