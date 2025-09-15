import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo 2.png";
import { FaSearch, FaUserAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import ProductIteam from "../ProductIteam";


function Header() {
  const [showCart, setShowCart] = useState(false); // কার্টের state
  let [showCategory, setShowCategory] = useState(false);
  let data = useSelector((state) => state.cart.value);
  return (
    <>
      <div className="bg-none-500 py-[50px] ">
        <Container>
          <Flex className={"justify-between "}>
            <div>
              <Image imgSrc={Logo} />
            </div>

            <div className="me-auto px-[90px]">
              <ul className="flex items-center gap-x-[50px]">
                <Link to={"/"}>
                  <li className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                    HOME
                  </li>
                </Link>
                <Link to={"Shop"}>
                  <li className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
                    SHOP
                  </li>
                </Link>
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

            <div className="flex gap-4 relative">
              <FaSearch />
              <FaUserAlt />
              <FaHeart />
              <FaShoppingCart
                onClick={() => setShowCart(!showCart)}
                className="cursor-pointer"
              />
            </div>

            {showCart && (
              <div className="bg-[#F6E2DD] py-10 px-5 w-[600px] absolute top-0 right-0 z-1">
                <ImCross
                  onClick={() => setShowCart(!showCart)}
                  className="mb-5 cursor-pointer"
                />

                {/* Header Row */}
                <ul className="flex justify-between font-bold border-b border-black p-3">
                  <li className="w-1/5">Title</li>
                  <li className="w-1/5 text-center">Price</li>
                  <li className="w-1/5 text-center">Quantity</li>
                  <li className="w-1/5 text-center">Image</li>
                  <li className="w-1/5 text-right">Total</li>
                </ul>

                {/* Product Rows */}
                {data.map((item, index) => (
                  <ul
                    key={index}
                    className="flex justify-between items-center border-b border-gray-400 p-3"
                  >
                    <li className="w-1/5">{item.title}</li>
                    <li className="w-1/5 text-center">{item.price}</li>
                    <li className="w-1/5 text-center">{item.quantity}</li>
                    <li className="w-1/5 text-center">
                      <img
                        class="w-full" src={"https://dummyjson.com/products"}
                        alt={item.title}
                        className="w-[40px] h-[40px] object-cover inline-block"
                      />
                    </li>
                    <li className="w-1/5 text-right">
                      {item.price} * {item.quantity}
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Header;
