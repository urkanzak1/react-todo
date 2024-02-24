import { PropsWithChildren } from 'react';
import classes from './TodoLayout.module.scss';

export function TodoLayout({ children }: PropsWithChildren) {
  return (
    <div className={classes.AppLayout}>
      {children}
    </div>
  );
}
