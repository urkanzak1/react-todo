import classes from "./TodoLayout.module.scss";

export const TodoLayout = ({children}: React.PropsWithChildren) => (
    <div className={classes.AppLayout}>
        {children}
    </div>
);