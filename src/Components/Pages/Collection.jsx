import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Collection1 from '/src/assets/1 (1).png'
import Collection2 from '/src/assets/2 (1).png'
import Collection3 from '/src/assets/3 (1).png'
import Collection4 from '/src/assets/4 (1).png'

function Collection() {
  return (
  <>
  <div className="my-[100px]">

<Container>
<Flex className=" gap-x-7 items-start">
<div className="w-1/2 ">
<Image imgSrc={Collection1} className={"w-full"}/>


</div>
<div className="w-1/2">
       <Image imgSrc={Collection2} className={"w-full"}/>
    <div className="flex w-1/2 py-7">
         <Image imgSrc={Collection3} className={"w-full"}/>
         <Image imgSrc={Collection4} className={"w-full"}/>
    </div>
</div>

</Flex>

</Container>


  </div>
  
  
  </>
  )
}

export default Collection
