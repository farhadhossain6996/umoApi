import React from 'react'
import { FaChevronLeft } from "react-icons/fa";



function NextArrow(props) {

    const { className, style, onClick } = props;
  return (
<div className=" absolute top-[120px] left-5" 
     
      onClick={onClick}
    > <FaChevronLeft /></div>
  )
}

export default NextArrow
