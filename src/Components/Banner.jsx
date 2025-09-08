import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";



const Banner = () => {
//  Slider  Start

 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


//  Slider  End





  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 দিনের জন্য কাউন্টডাউন

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / (1000 * 60)) % 60);
        const secs = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, mins, secs });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>



<Slider {...settings}>
      <div>
         <Link to={"Shop"}>
        <div className="relative bg-[url(/src/assets/SLIDER.png)] h-[800px] bg-center bg-cover bg-no-repeat">
          
          {/* Countdown */}
          <div className="absolute bottom-[50px] left-[300px] bg-[#F6E2DD] px-6 py-4 rounded-lg flex gap-6 text-black text-center font-bold text-xl shadow-lg">
            <div>
              <p>{timeLeft.days}</p>
              <span className="text-sm">DAYS</span>
            </div>
            <span>:</span>
            <div>
              <p>{timeLeft.hours}</p>
              <span className="text-sm">HOURS</span>
            </div>
            <span>:</span>
            <div>
              <p>{timeLeft.mins}</p>
              <span className="text-sm">MINS</span>
            </div>
            <span>:</span>
            <div>
              <p>{timeLeft.secs}</p>
              <span className="text-sm">SEC</span>
            </div>
          </div>

        </div>
      </Link>
      </div>
      <div>
           <div>
         <Link to={"Shop"}>
        <div className="relative bg-[url(/src/assets/SLIDER2.jpg)] h-[800px] bg-center bg-cover bg-no-repeat">
          
          {/* Countdown */}
          <div className="absolute bottom-[50px] left-[300px] bg-[#F6E2DD] px-6 py-4 rounded-lg flex gap-6 text-black text-center font-bold text-xl shadow-lg">
            <div>
              <p>{timeLeft.days}</p>
              <span className="text-sm">DAYS</span>
            </div>
            <span>:</span>
            <div>
              <p>{timeLeft.hours}</p>
              <span className="text-sm">HOURS</span>
            </div>
            <span>:</span>
            <div>
              <p>{timeLeft.mins}</p>
              <span className="text-sm">MINS</span>
            </div>
            <span>:</span>
            <div>
              <p>{timeLeft.secs}</p>
              <span className="text-sm">SEC</span>
            </div>
          </div>

        </div>
      </Link>
      </div>
      </div>
    
    </Slider>
  









 
    </>
  );
};

export default Banner;
