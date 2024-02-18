import * as React from 'react';
import clsases from "./Loader.module.scss";
import { todoIsLoadingSelector, useTodoSelector } from '../../redux/todoSelectors';

export const Loader = React.memo(function Loader(props: any){

    const isLoading = useTodoSelector(todoIsLoadingSelector);

    return (
        isLoading || props.isLoading
            ? <div className='text-center'>
                <span className={clsases.loader}></span>
              </div>
            : props.children
    )

})