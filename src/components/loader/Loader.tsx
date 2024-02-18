import clsases from "./Loader.module.scss";
import { todoIsLoadingSelector } from '../../redux/todoSelectors';
import { useTodoSelector } from '../../redux/TodoStore';
import { Fragment, memo } from "react";

type LoaderProps = {
    isLoading?: boolean;
}

export const Loader = memo<React.PropsWithChildren<LoaderProps>>(function Loader(props){

    const isLoading = useTodoSelector(todoIsLoadingSelector);

    return (
        <Fragment>
            { 
                isLoading || props.isLoading
                    ? <div className='text-center'>
                        <span className={clsases.loader}></span>
                      </div>
                    : props.children
            }
        </Fragment>
    )

})