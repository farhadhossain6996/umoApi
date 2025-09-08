import React from 'react'
import { FaChevronRight } from "react-icons/fa";

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
  <div
      className=" absolute top-[120px] right-4 z-1"
     
      onClick={onClick}
    > <FaChevronRight /></div>
  )
}

export default PrevArrow
