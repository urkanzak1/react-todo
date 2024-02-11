import * as React from "react";
import classes from "./TodoLayout.module.scss";

export const TodoLayout = ({children}: {children: any}) => (
    <div className={classes.AppLayout}>
        {children}
    </div>
);