import React from 'react'

import classNames from 'classnames'

export const Container = ({children, className}: {
    children: React.ReactNode,
    className: any
  }) => {
  return(  
  <div style={{ margin: '0 auto' }} className={classNames('max-w-auto md:max-w-[70rem] ', className)}>{children}</div>
  )
  
}

