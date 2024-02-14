import * as React from 'react';
import clsases from "./Loader.module.scss";
import { TodoState } from '../../redux/TodoStore';
import { useSelector } from 'react-redux';

export const Loader = React.memo(function Loader(props: any){

    const isLoading = useSelector((state: TodoState) => state.isLoading);

    return (
        isLoading || props.isLoading
            ? <div className='text-center'>
                <span className={clsases.loader}></span>
              </div>
            : props.children
    )

})