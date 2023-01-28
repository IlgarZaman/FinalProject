import React from "react";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./section-1.css";
import { Autoplay, Navigation } from "swiper";
const SectionOne = () => {
  return (
    <div id="sectionOne">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="first">
          <div className="Text">
            <p>Floral</p>
            <h1>Excellent bouquets for you</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="twice">
          <div className="Text">

            <p>Floral</p>
            <h1>Excellent bouquets for you</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="third">
          <div className="Text">
            <p>Floral</p>
            <h1>Excellent bouquets for you</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionOne;
