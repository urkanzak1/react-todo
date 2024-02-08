import * as React from "react";
import "./TodoLayout.scss";

export const TodoLayout = ({children}: {children: any}) => (
    <div className="AppLayout">
        {children}
    </div>
);