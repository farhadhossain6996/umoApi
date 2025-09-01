import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
  <>
  <Link to ={"Shop"}>
  <div className="bg-[url(/src/assets/SLIDER.png)] h-[800px] bg-center bg-cover bg-no-repeat"></div>  
  </Link>
  </>
  )
}

export default Banner

