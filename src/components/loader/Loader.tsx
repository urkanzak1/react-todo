import * as React from 'react';
import clsases from "./Loader.module.scss";
import { TodoState } from '../../redux/TodoStore';
import { useSelector } from 'react-redux';
import {PropsWithChildren} from "react";

type LoaderProps = {
    isLoading?: boolean
}

export const Loader = React.memo<PropsWithChildren<LoaderProps>>(function Loader(props){

    // todo selectors
    // todo createSelector
    // todo typing
    const isLoading = useSelector((state: TodoState) => state.isLoading);

    return (
        isLoading || props.isLoading
            ? <div className='text-center'>
                <span className={clsases.loader}></span>
              </div>
            : props.children
    )

})