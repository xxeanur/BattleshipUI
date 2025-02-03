import React, { ReactNode } from 'react'
import { style } from './style'



interface containerProps {
  children?: ReactNode;
}

function Container({ children }: containerProps) {
  const classes = style();
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default Container