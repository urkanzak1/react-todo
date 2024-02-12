import * as React from 'react';
import clsases from "./Loader.module.scss";
import { TodoState } from '../../redux/TodoStore';
import { useSelector } from 'react-redux';

export const Loader = (props: any) => {

    const isLoading = useSelector((state: TodoState) => state.isLoading);

    console.log(isLoading);
    return (
        isLoading || props.isLoading
            ? <div className='text-center'>
                <span className={clsases.loader}></span>
              </div>
            : props.children
    )

}