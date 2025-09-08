import React from 'react'

function Badge({ badgeText, className }) {
  return (
    <div className={`px-[20px] py-[10px] bg-black w-[90px] text-center  text-white  ${className}`}>
      {badgeText}
    </div>
  )
}

export default Badge
