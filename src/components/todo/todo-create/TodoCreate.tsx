import * as React from 'react';
import { addTodoItem } from '../../../redux/TodoSlice';
import classes from  "./TodoCreate.module.scss";
import { useDispatch } from 'react-redux';
import { TodoDispatch } from '../../../redux/TodoStore';

export const TodoCreate = () => {

    const dispatch = useDispatch<TodoDispatch>();

    const [state, setState] = React.useState({
        name: '',
        text: ''
    });

    const onClickHandler = () => {
        if (state.name && state.text){
            dispatch(addTodoItem({
                name: state.name,
                text: state.text,
                id: Math.random()
            }));
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