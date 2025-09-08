import React from 'react'
import Badge from './Badge'
import Image from './Image'

import { Link } from 'react-router-dom'
import { FaHeart,FaCartShopping } from "react-icons/fa6";
import { LuRefreshCcwDot } from "react-icons/lu";
import Heading from './Heading'


function ProductIteam({Imgproduct,BadgeText,title,price}) {
  return (
    <div className=" relative group px-3 mx-3  ">
      <Image imgSrc={Imgproduct} />
      <Badge badgeText ={BadgeText} className={"absolute top-6 left-6"}/>

    <div className="bg-[#F6E2DD] py-[25px] w-[305px] px-[14px]  opacity-0 group-hover:opacity-75 absolute left-0 bottom-[60px]">
        <Link className='flex  items-center  justify-end gap-x-3 hover:underline font-bold'>Add To Wish lisht <FaHeart /> </Link>
        <Link className='flex  items-center  justify-end gap-x-3 hover:underline font-bold'>Compare <LuRefreshCcwDot /> </Link>
        <Link className='flex  items-center  justify-end gap-x-3 hover:underline font-bold'>Add to Card <FaCartShopping /> </Link>
    </div>
    <div className="mt-2">
<Heading text={title} as={"h3"}/>
<Heading text={price} as={"h3"}/>
    </div>
    </div>
  )
}

export default ProductIteam





