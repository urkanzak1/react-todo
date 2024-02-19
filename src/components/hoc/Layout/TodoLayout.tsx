import { PropsWithChildren } from "react";
import classes from "./TodoLayout.module.scss";

export const TodoLayout = ({children}: PropsWithChildren) => (
    <div className={classes.AppLayout}>
        {children}
    </div>
);