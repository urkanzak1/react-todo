import * as React from 'react';
import clsases from "./Loader.module.scss";
import { todoIsLoadingSelector } from '../../redux/todoSelectors';
import { useTodoSelector } from '../../redux/TodoStore';

type LoaderProps = {
    isLoading?: boolean;
}

export const Loader = React.memo<React.PropsWithChildren<LoaderProps>>(function Loader(props){

    const isLoading = useTodoSelector(todoIsLoadingSelector);

    return (
        <React.Fragment>
            { 
                isLoading || props.isLoading
                    ? <div className='text-center'>
                        <span className={clsases.loader}></span>
                      </div>
                    : props.children
            }
        </React.Fragment>
    )

})