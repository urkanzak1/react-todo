import * as React from "react";
import { useDebouncedCallback } from 'use-debounce';
import classes from './TodosSearch.module.scss';
import axios from 'axios';

interface TodoSearchItem {
    id: number;
    title: string;
    completed: boolean;
}

export const TodosSearch = () => {

    const [searchedTodos, setTodos] = React.useState<TodoSearchItem[]>([]);

    const onSearchDebounced = useDebouncedCallback((e: any) => {
        
        const searchStr: string = e.target.value;

        if (searchStr.length > 0){
            axios
                .get(`https://jsonplaceholder.typicode.com/todos?&_limit=${searchStr}`)
                .then(result => {
                    console.log(result);
                    if (result.status === 200){
                        setTodos(result.data);
                    }
                })
                .catch(() => {
                    setTodos([]);
                });
        }
        else {
            setTodos([]);
        }

    }, 1000)

    return (
        <div className={classes.todosSearch}>
            <big className="mb-2">Поиск todos</big>
            <input type="number" className="form-control" onChange={onSearchDebounced} />
            {   
                searchedTodos?.map((todo) => {
                   return (
                       <ul key={todo.id}>
                            <li>
                                <label>{todo.title}</label>
                                <div className={classes.iconCompleted}>
                                    {todo.completed && '✔'}
                                </div>
                            </li>
                       </ul>
                   )
                })
            }
        </div>
    )
}