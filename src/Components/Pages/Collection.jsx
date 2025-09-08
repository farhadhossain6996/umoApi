
import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Collection1 from "/src/assets/1 (1).png";
import Collection2 from "/src/assets/2 (1).png";
import Collection3 from "/src/assets/3 (1).png";
import Collection4 from "/src/assets/4 (1).png";

function Collection() {
  return (
    <div className="my-[100px]">
      <Container>
        <Flex className="flex items-center justify-between">
          {/* Left side */}
          <div className="w-[49%]">
            <Image imgSrc={Collection1} className="w-full" />
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-5 w-[49%]">
            {/* Top image (Collection2) */}
            <div className="">
              <Image imgSrc={Collection2} className="w-full" />
            </div>

            {/* Bottom row with 2 images */}
            <div className="flex items-baseline justify-between ">
              <Image imgSrc={Collection3} className="w-[48%]" />
              <Image imgSrc={Collection4} className="w-[48%]" />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Collection;
