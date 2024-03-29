import { setLoading, setTodoList } from '../../../redux/TodoSlice';
import classes from  "./TodoCreate.module.scss";
import { useTodoDispatch, useTodoSelector } from '../../../redux/TodoStore';
import { $addTodoItem } from '../../../api/todoApi';
import { todoListSelector } from '../../../redux/todoSelectors';
import { useState } from 'react';
import cn from 'classnames';

export const TodoCreate = () => {

    const todoDispatch = useTodoDispatch();
    const todoList = useTodoSelector(todoListSelector);

    const [state, setState] = useState({
        name: '',
        text: ''
    });

    const onClickHandler = () => {
        if (state.name && state.text){
            todoDispatch(setLoading(true));
            $addTodoItem(todoList, {
                name: state.name,
                text: state.text,
                id: Math.random()
            }).then(todoList => {
                todoDispatch(setTodoList(todoList));
                todoDispatch(setLoading(false));
            })
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
        <div className={classes.TodoAdd}>
            <input name="name" className="form-control my-3" type="text" placeholder="input task name..." value={state.name || ''} onInput={onTodoCreateInputHandler} />
            <input name="text" className="form-control" type="text" placeholder="input task text..." value={state.text || ''} onInput={onTodoCreateInputHandler}  />
            <div className={cn(classes.addButton, classes.rounded, 'my-3')} onClick={onClickHandler}>Add +</div>
        </div>
    )

}