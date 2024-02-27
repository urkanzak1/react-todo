import classes from  "./TodoItem.module.scss";
import { removeTodoItemById } from "../../../redux/TodoSlice";
import { useTodoDispatch } from "../../../redux/TodoStore";
import {memo, forwardRef, useCallback, useEffect, useMemo, useRef, useState} from "react";
import cn from 'classnames';
import React from 'react';

const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = memo((props) => {
    // todo
    return <button {...props}></button>
});

type SomeProps = {
    test: number
}

const SomeComponent = forwardRef<HTMLDivElement, SomeProps>(({ test }, ref) => {
    // todo
    return <div ref={ref}></div>
})

export const TodoItem = memo(function TodoItem({id, name, text}: {id: number, name: string, text: string}){

    const [state, setState] = useState(0);
    const refState = useRef<string>('');

    const nodeRef = useRef<HTMLDivElement>(null);

    const todoDispatch = useTodoDispatch();

    useEffect(() => {
        nodeRef.current?.scrollIntoView();
    }, []);

    const deleteItemHandler = () => {
        // setState(prev => prev + 1);
        // setState(prev => prev + 2);
        // setState(prev => prev + 3);

        refState.current = 'sdsdsad';
        todoDispatch(removeTodoItemById(id));
    }

    return (
        <div ref={nodeRef} className={cn(classes.todoItem, classes.noSelect)}>
            <div className={classes.btnContainer}>
                <label className="text-center ps-3">{name}</label>
                <Button className={cn(classes.btnTodo, 'btn', 'btn-danger', 'rounded')} onClick={deleteItemHandler}>x</Button>
                <SomeComponent test={'sd'} ref={nodeRef}/>
            </div>
            <hr />
            <label className={cn(classes.minHeight150Px, {'ps-3': true})}>{text}</label>
        </div>
    )
})