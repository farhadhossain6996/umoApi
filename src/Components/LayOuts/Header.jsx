import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '/src/assets/logo 2.png'
import { FaSearch,FaUserAlt,FaHeart ,FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom'

function Header() {
  return (
<>
<div className="bg-none-500 py-[50px] ">

    <Container>
<Flex className={"justify-between "}>
<div className="">
<Image imgSrc={Logo}/>


</div>
<div className="me-auto px-[90px]">
<ul className='flex items-center  gap-x-[50px]'>
 <Link to={"/"}>
<li className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      HOME
    </li>

 </Link>

<Link to={"Shop"}><li className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      SHOP
    </li></Link>
    <li className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      COLLECTION
    </li>
    <li className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      JOURNAL
    </li>
    <li className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      LOOKBOOK
    </li>
    <li className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
      PAGES
    </li>

</ul>


</div>
<div className=" flex gap-4">
    <FaSearch />
    <FaUserAlt />
    <FaHeart />
    <FaShoppingCart />
</div>



</Flex>


    </Container>
</div>

{/* BannerPart start.......... */}




</>
  )
}

export default Header




