import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import product1 from "/src/assets/product1.png";
import product2 from "/src/assets/product2.png";
import product3 from "/src/assets/product3.png";
import product4 from "/src/assets/product4.png";
import ProductIteam from "./ProductIteam";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import axios from "axios"
import { useState,useEffect } from "react";

function Produts() {
  // Slider///
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const [allData, setAllData] = useState([])

useEffect(() => {
  async function alldatas() {
    let res = await axios.get("https://dummyjson.com/products")
    setAllData(res.data.products)   
  }
  alldatas()
}, [])

  return (
    <>
      <div className=" my-[90px]">
        <Container>
          <div className=" ">
            <h2 className="text-center font-regular text-3xl text-[35px]">
              OUR TRENDY <span className=" font-medium">PRODUCTS</span>{" "}
            </h2>
            <ul
              className=" flex items-center justify-center font-medium 
 py-3 gap-[60px]  uppercase"
            >
              <a href="/">All</a>
              <a href="/">NewArrivals</a>
              <a href="/">BestSeller</a>
              <a href="/">TopRating</a>
            </ul>
          </div>

          <div className="py-[32px]">
            <Slider {...settings}>

                {allData.map(item=>(
              <div>
               
                 <ProductIteam Imgproduct={item.thumbnail} BadgeText={item.category}  price={`$ ${item.price}`} title={item.title}/>
                 
            
                

              </div>
                  ))}
                
             
            </Slider>
          </div>









        </Container>
      </div>
    </>
  );
}

export default Produts;





