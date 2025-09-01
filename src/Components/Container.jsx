import React from 'react'

function Container({children,className}) {
  return (
  <>
  <div className={`w-[1320px] m-auto ${className}`} >{children}</div>
  
  
  </>
  )
}

export default Container
