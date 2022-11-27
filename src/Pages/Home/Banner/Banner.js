import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import deal from "../../../assets/Home/deal.gif";
import locate from "../../../assets/Home/map.gif";

const Banner = () => {
  return (
    <div className="py-24">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={deal} alt="cover-1" className="max-w-sm rounded-lg" />
              <div className="p-5 text-left">
                <h1 className="text-5xl font-bold">Sell Your Used Phone!!</h1>
                <p className="py-6">
                  You can easily sell your used phone on “Mobile Baba” at a good
                  price. Go to "Add Product" and add the phone with your phone's
                  picture, condition, details, name, model etc.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={locate} alt="cover-1" className="max-w-sm rounded-lg" />
              <div className="p-5 text-left">
                <h1 className="text-5xl font-bold">Find Used Phone Here!!</h1>
                <p className="py-6">
                  If you need a second hand phone at an affordable price, then
                  “Phone Baba” is the best choice. Search, Like, Buy. Simple!!
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
